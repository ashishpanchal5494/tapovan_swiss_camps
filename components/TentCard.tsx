import Image from "next/image";
import Link from "next/link";
import React from "react";

interface TentCardProps {
  id: number;
  title: string;
  price: number;
  image: string;
  beds: number;
  baths: string | number;
  adults: string | number;
  checkIn: string | Date;
  checkOut: string | Date;
  description: string;
  perHeadPrice: number;
  linkBooking: string;
  dataAosDuration: number;
}

const TentCard: React.FC<TentCardProps> = ({
  id,
  title,
  price,
  image,
  beds,
  baths,
  adults,
  checkIn,
  checkOut,
  perHeadPrice,
  description,
  linkBooking,
  dataAosDuration,
}) => {
  return (
    <div
      className="col-lg-4 col-md-6"
      data-aos="fade-up"
      data-aos-duration={dataAosDuration}
    >
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
            ₹{perHeadPrice} / Head
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
            <span className="border-end me-3 pe-3">
              <i className="bx bx-bath text-primary me-2"></i>
              {baths} Washroom
            </span>
            <span>
              <i className="bx bx-wifi text-primary me-2"></i>Wifi
            </span>
          </div>
          <p className="text-body mb-3">{description}</p>
          <div className="d-flex justify-content-between">
            <Link
              style={{ color: "white" }}
              className="btn style1 rounded py-2 px-4"
              prefetch={true} // Explicitly enable prefetch (default in Next.js)
              href={{
                pathname: `/tents/${id}`,
                query: {
                  id,
                  title,
                  price,
                  image,
                  beds,
                  baths,
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
