/* eslint-disable no-console */
const { spawn } = require("child_process");
const { join, basename, extname } = require("path");
const { readdirSync, existsSync, mkdirSync } = require("fs");

const INPUT_DIR = join(process.cwd(), "public", "assets", "video");
const files = readdirSync(INPUT_DIR).filter((f) =>
  /\.(mp4|mov|mkv|webm)$/i.test(f)
);

function run(cmd, args, cwd) {
  return new Promise((resolve, reject) => {
    const p = spawn(cmd, args, {
      cwd,
      stdio: "inherit",
      shell: false, // Avoid shell so paths with spaces work correctly on Windows
    });
    p.on("close", (code) => {
      if (code === 0) resolve();
      else reject(new Error(`${cmd} exited with code ${code}`));
    });
  });
}

(async () => {
  if (!files.length) {
    console.log("No input videos found in", INPUT_DIR);
    process.exit(0);
  }

  for (const file of files) {
    const inputPath = join(INPUT_DIR, file);
    const name = basename(file, extname(file));

    const outMp4 = join(INPUT_DIR, `${name}-1080p.mp4`);
    const outWebm = join(INPUT_DIR, `${name}-1080p.webm`);

    // Ensure HLS dirs
    const hls1080 = join(INPUT_DIR, "hls_0");
    const hls720 = join(INPUT_DIR, "hls_1");
    const hls480 = join(INPUT_DIR, "hls_2");
    [hls1080, hls720, hls480].forEach((d) => {
      if (!existsSync(d)) mkdirSync(d, { recursive: true });
    });

    console.log(`\n=== Encoding: ${file} → MP4 1080p`);
    await run(
      "ffmpeg",
      [
        "-y",
        "-i",
        inputPath,
        "-c:v",
        "libx264",
        "-profile:v",
        "high",
        "-level",
        "4.2",
        "-preset",
        "slow",
        "-b:v",
        "8M",
        "-maxrate",
        "10M",
        "-bufsize",
        "16M",
        "-vf",
        "scale=-2:1080",
        "-pix_fmt",
        "yuv420p",
        "-movflags",
        "+faststart",
        "-c:a",
        "aac",
        "-b:a",
        "192k",
        outMp4,
      ],
      process.cwd()
    );

    console.log(`\n=== Encoding: ${file} → WebM VP9 1080p`);
    await run(
      "ffmpeg",
      [
        "-y",
        "-i",
        inputPath,
        "-c:v",
        "libvpx-vp9",
        "-b:v",
        "0",
        "-crf",
        "28",
        "-row-mt",
        "1",
        "-vf",
        "scale=-2:1080",
        "-pix_fmt",
        "yuv420p10le",
        "-c:a",
        "libopus",
        "-b:a",
        "160k",
        outWebm,
      ],
      process.cwd()
    );

    console.log(`\n=== Encoding: ${file} → HLS ladder (1080p/720p/480p)`);
    const hlsSegPattern = join(INPUT_DIR, "hls_%v", "seg_%03d.ts").replace(
      /\\/g,
      "/"
    );
    const hlsIndexPattern = join(INPUT_DIR, "hls_%v", "index.m3u8").replace(
      /\\/g,
      "/"
    );
    await run(
      "ffmpeg",
      [
        "-y",
        "-i",
        inputPath,
        "-filter:v:0",
        "scale=-2:1080",
        "-c:v:0",
        "libx264",
        "-profile:v:0",
        "high",
        "-b:v:0",
        "8M",
        "-maxrate:v:0",
        "10M",
        "-bufsize:v:0",
        "16M",
        "-filter:v:1",
        "scale=-2:720",
        "-c:v:1",
        "libx264",
        "-profile:v:1",
        "high",
        "-b:v:1",
        "4M",
        "-maxrate:v:1",
        "5M",
        "-bufsize:v:1",
        "10M",
        "-filter:v:2",
        "scale=-2:480",
        "-c:v:2",
        "libx264",
        "-profile:v:2",
        "high",
        "-b:v:2",
        "2M",
        "-maxrate:v:2",
        "3M",
        "-bufsize:v:2",
        "6M",
        "-c:a",
        "aac",
        "-b:a",
        "160k",
        "-ac",
        "2",
        "-f",
        "hls",
        "-hls_time",
        "6",
        "-hls_playlist_type",
        "vod",
        "-master_pl_name",
        "master.m3u8",
        "-hls_segment_filename",
        hlsSegPattern,
        "-var_stream_map",
        "v:0,a:0 v:1,a:0 v:2,a:0",
        hlsIndexPattern,
      ],
      process.cwd()
    );
  }

  console.log("\nAll videos encoded successfully.");
})().catch((err) => {
  console.error(err);
  process.exit(1);
});
