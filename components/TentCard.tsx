import Image from "next/image";
import Link from "next/link";
import React from "react";

interface TentCardProps {
  id: number;
  title: string;
  mainPrice: number;
  price: number;
  image: string;
  altText: string;
  beds: number;
  baths: string | number;
  adults: string | number;
  checkIn: string | Date;
  checkOut: string | Date;
  description: string;
  perHeadPrice: number;
  perHeadMainPrice: number;
  linkBooking: string;
  dataAosDuration: number;
}

const TentCard: React.FC<TentCardProps> = ({
  id,
  title,
  mainPrice,
  price,
  image,
  altText,
  beds,
  baths,
  adults,
  checkIn,
  checkOut,
  perHeadPrice,
  perHeadMainPrice,
  description,
  linkBooking,
}) => {
  const getBathCount = (
    adults: number | string,
    defaultBaths: number | string
  ): number => {
    const adultCount =
      typeof adults === "string" ? parseInt(adults, 10) : adults;

    if (adultCount > 50) return 10;
    if (adultCount > 45) return 9;
    if (adultCount > 40) return 8;
    if (adultCount > 34) return 7;
    if (adultCount > 28) return 6;
    if (adultCount > 23) return 5;
    if (adultCount > 18) return 4;
    if (adultCount > 12) return 3;
    if (adultCount > 6) return 2;

    return typeof defaultBaths === "string"
      ? parseInt(defaultBaths, 10)
      : defaultBaths;
  };

  const bathCount = getBathCount(adults, baths);

  return (
    <div className="col-lg-4 col-md-6">
      <div className="room-item shadow rounded overflow-hidden">
        <div className="position-relative">
          <Image
            width={600}
            height={600}
            className="img-fluid"
            src={image.startsWith("/") ? image : `/${image}`}
            alt={title}
          />
          <small className="position-absolute start-0 top-100 translate-middle-y bg-primary text-white rounded py-1 px-3 ms-4">
            <span
              style={{
                textDecoration: "line-through",
                color: "#F7C901",
                marginRight: 5,
              }}
            >
              ₹{perHeadMainPrice}
            </span>
            <span className=" text-white">₹{perHeadPrice}</span> / Head
          </small>
        </div>
        <div className="p-4 mt-2">
          <div className="d-flex justify-content-between mb-3">
            <h5 className="mb-0">{title}</h5>
            <div className="ps-2">
              <small className="bx bxs-star text-primary"></small>
              <small className="bx bxs-star text-primary"></small>
              <small className="bx bxs-star text-primary"></small>
              <small className="bx bxs-star text-primary"></small>
              <small className="bx bxs-star text-primary"></small>
            </div>
          </div>
          <div className="features d-flex mb-3">
            <span className="border-end me-3 pe-3">
              <i className="bx bx-bed text-primary me-2"></i>
              {adults ? adults : beds} Bed
            </span>
            <span
              style={{ fontSize: 11, marginTop: 4 }}
              className="border-end me-3 pe-3"
            >
              <i
                className="bx bx-bath text-primary me-2"
                style={{ fontSize: 17 }}
              ></i>
              {bathCount ? bathCount : baths} Washroom
            </span>
            <span>
              <i className="bx bx-wifi text-primary me-2"></i>Wifi
            </span>
          </div>
          <p className="text-body mb-3">
            {description.split(" ").slice(0, 20).join(" ")}
            {description.split(" ").length > 20 && "..."}
          </p>
          <p className="text-body mb-3">{altText}</p>

          <div className="d-flex justify-content-between">
            <Link
              style={{ color: "white" }}
              className="btn style1 rounded py-2 px-4"
              prefetch={true}
              href={{
                pathname: `/tents/${id}`,
                query: {
                  id,
                  title,
                  mainPrice,
                  price,
                  image,
                  beds,
                  baths: bathCount,
                  adults,
                  checkIn:
                    typeof checkIn === "string"
                      ? checkIn
                      : checkIn.toISOString(),
                  checkOut:
                    typeof checkOut === "string"
                      ? checkOut
                      : checkOut.toISOString(),
                  perHeadPrice,
                  description,
                },
              }}
            >
              View Details
            </Link>
            <Link className="btn style2 rounded py-2 px-4" href={linkBooking}>
              Book Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TentCard;
