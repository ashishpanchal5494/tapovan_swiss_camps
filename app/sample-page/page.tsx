"use client";

import Loading from "@/components/Loading";
import React, { useEffect, useState } from "react";
import AOS from "aos";

function SamplePage() {
  const [isClient, setIsClient] = useState(false);

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    setIsClient(true);
    AOS.init({ duration: 1200 });
  }, []);

  if (!isClient) {
    return <Loading />;
  }

  return (
    <>
      <div
        className={isMobile ? "page-content ptb-200" : "page-content ptb-60"}
      >
        <div className="container">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            ut enim sagittis, lacinia elit non, fermentum mauris. Morbi lectus
            urna, molestie quis nisi ut, rutrum consequat eros. Praesent
            commodo, nunc varius fermentum dictum, erat tortor commodo nunc, eu
            mollis purus ante vitae ex. Proin facilisis condimentum mi vitae
            porta. Aliquam nunc nisi, ultrices et rhoncus vitae, mattis nec ex.
            Sed at urna eget lectus rutrum ornare ut quis nibh. In tincidunt
            interdum mollis. Quisque quam nunc, faucibus sit amet ex sit amet,
            varius porttitor felis. Maecenas placerat risus lectus. Orci varius
            natoque penatibus et magnis dis parturient montes, nascetur
            ridiculus mus. In tempus gravida libero sed pharetra. Proin
            fringilla posuere elit, in sagittis magna auctor quis. Fusce
            ullamcorper luctus leo a egestas. Mauris eget condimentum orci, at
            consectetur felis. Donec porttitor feugiat pellentesque.
          </p>

          <p>
            Orci varius natoque penatibus et magnis dis parturient montes,
            nascetur ridiculus mus. Phasellus ut rhoncus purus, id imperdiet
            elit. Praesent turpis risus, gravida vel orci quis, faucibus posuere
            ante. Curabitur sem est, varius id velit mattis, pellentesque
            ultrices magna. Donec vestibulum commodo orci non tincidunt. Nam
            tortor augue, tristique sed velit at, malesuada condimentum magna.
            Cras scelerisque dignissim dignissim. Sed fermentum nisl at dolor
            semper sollicitudin. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit.
          </p>

          <p>
            Aliquam erat volutpat. Nam elit elit, condimentum sed sem sit amet,
            aliquam maximus lorem. Praesent finibus metus libero, iaculis
            pulvinar dolor iaculis in. Aenean molestie aliquam leo vitae
            fringilla. Quisque sit amet nibh enim. Sed non sem ullamcorper,
            dictum metus vitae, pharetra tellus. Nunc sed justo id neque
            interdum laoreet vitae gravida sapien. Fusce id justo rhoncus, porta
            ipsum non, tempus ex. Cras id leo vel nisl rhoncus convallis.
          </p>

          <p>
            Suspendisse auctor leo id tempus ultricies. Proin sit amet quam vel
            ligula lobortis ultrices. Aliquam magna nisi, finibus vitae dui
            vitae, laoreet imperdiet lectus. Curabitur eu lorem id nunc
            vulputate aliquet a ut purus. Etiam eu nulla eros. Integer efficitur
            egestas quam, a efficitur enim porttitor id. Nam elementum nunc nec
            orci sollicitudin venenatis. Aliquam consequat ex nunc, varius
            blandit leo efficitur et. Aenean arcu magna, vehicula sit amet orci
            a, venenatis pharetra ante. Nunc sit amet arcu metus. Fusce vitae
            sapien dapibus, porttitor tellus ut, sagittis magna. Quisque auctor
            ligula tellus, pulvinar rutrum ex finibus ac. Vivamus ac pretium
            libero. Aenean convallis leo ut lectus gravida, quis tincidunt
            turpis ullamcorper. Suspendisse et tristique risus, sed molestie
            tellus. Ut aliquam luctus erat in porttitor.
          </p>

          <p>
            Fusce vitae turpis suscipit, pharetra elit quis, mattis nibh. Nulla
            volutpat diam sit amet ultrices accumsan. In at iaculis urna.
            Suspendisse elit dolor, ornare condimentum lacinia sed, auctor
            maximus lectus. Nullam sodales congue lacus a gravida. In volutpat
            semper justo, condimentum semper justo dignissim ac. Morbi commodo
            mauris vel neque sollicitudin, sit amet laoreet augue sagittis. In
            ac congue purus. Aenean nunc turpis, vestibulum nec lacus sed,
            sagittis mattis velit.
          </p>
        </div>
      </div>
    </>
  );
}

export default SamplePage;
