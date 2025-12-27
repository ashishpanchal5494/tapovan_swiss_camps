"use client";

import Image from "next/image";
import Link from "next/link";
import React, { memo, useState } from "react";
import { useSearchParams } from "next/navigation";

interface TentCardProps {
  slug: string;
  title: string;
  image: string;
  altText: string;
  beds: number;
  baths: string | number;
  adults: string | number;
  description: string;
  perHeadPrice: number;
  perHeadMainPrice: number;
  basePrice: number;
  mainBasePrice: number;
  totalDays?: number;
  linkBooking: string;
  dataAosDuration: number;
}

const TentCard: React.FC<TentCardProps> = memo(
  ({
    slug,
    title,
    image,
    beds,
    baths,
    adults,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    perHeadPrice: _perHeadPrice,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    perHeadMainPrice: _perHeadMainPrice,
    basePrice,
    mainBasePrice,
    totalDays = 1,
    description,
    linkBooking,
  }) => {
    const searchParams = useSearchParams();
    const initialAdults = typeof adults === "string" ? parseInt(adults, 10) : adults;
    const [personsPerTent, setPersonsPerTent] = useState<number>(initialAdults);

    // Build URL with preserved search parameters
    const buildDetailsUrl = () => {
      const baseUrl = `/tents/${slug}`;
      const params = new URLSearchParams();
      
      // Preserve all search params
      if (searchParams) {
        searchParams.forEach((value, key) => {
          params.append(key, value);
        });
      }
      
      const queryString = params.toString();
      return queryString ? `${baseUrl}?${queryString}` : baseUrl;
    };

    const calculatePrice = (
      basePrice: number,
      beds: number,
      mainBasePrice: number
    ) => {
      let perHeadPrice = basePrice;
      let perHeadMainPrice = mainBasePrice;

      if (beds === 5) {
        if (personsPerTent === 2) {
          perHeadPrice = Math.round(basePrice * 1.6);
          perHeadMainPrice = Math.round(mainBasePrice * 1.6);
        } else if (personsPerTent === 3) {
          perHeadPrice = Math.round(basePrice * 1.3);
          perHeadMainPrice = Math.round(mainBasePrice * 1.3);
        } else if (personsPerTent === 4) {
          perHeadPrice = Math.round(basePrice * 1.1);
          perHeadMainPrice = Math.round(mainBasePrice * 1.1);
        }
      }

      const totalPrice = perHeadPrice * personsPerTent * totalDays;
      const totalMainPrice = perHeadMainPrice * personsPerTent * totalDays;

      return { perHeadPrice, perHeadMainPrice, totalPrice, totalMainPrice };
    };

    const { perHeadPrice, perHeadMainPrice } = calculatePrice(
      basePrice,
      beds,
      mainBasePrice
    );

    const handleAdultsChange = (newValue: number) => {
      if (newValue >= 1 && newValue <= beds) {
        setPersonsPerTent(newValue);
      }
    };

    const incrementAdults = () => {
      if (personsPerTent < beds) {
        setPersonsPerTent((prev) => prev + 1);
      }
    };

    const decrementAdults = () => {
      if (personsPerTent > 1) {
        setPersonsPerTent((prev) => prev - 1);
      }
    };

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

    const bathCount = getBathCount(personsPerTent, baths);

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
            <small
              className="position-absolute start-0 top-100 translate-middle-y text-white rounded py-1 px-3 ms-4"
              style={{ backgroundColor: "#507650" }}
            >
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
                <small
                  style={{ color: "#F7C901" }}
                  className="bx bxs-star"
                ></small>
                <small
                  style={{ color: "#F7C901" }}
                  className="bx bxs-star"
                ></small>
                <small
                  style={{ color: "#F7C901" }}
                  className="bx bxs-star"
                ></small>
                <small
                  style={{ color: "#F7C901" }}
                  className="bx bxs-star"
                ></small>
                <small
                  style={{ color: "#F7C901" }}
                  className="bx bxs-star"
                ></small>
              </div>
            </div>
            <div className="features d-flex mb-3">
              <span className="border-end me-3 pe-3">
                <i className="bx bx-bed text-[#507650] me-2"></i>
                {personsPerTent ? personsPerTent : beds} Bed
              </span>
              <span
                style={{ fontSize: 11, marginTop: 4 }}
                className="border-end me-3 pe-3"
              >
                <i
                  className="bx bx-bath text-[#507650] me-2"
                  style={{ fontSize: 17 }}
                ></i>
                {bathCount ? bathCount : baths} Washroom
              </span>
              <span>
                <i className="bx bx-wifi text-[#507650] me-2"></i>Wifi
              </span>
            </div>
            <p className="text-body mb-3">
              {description.split(" ").slice(0, 20).join(" ")}
              {description.split(" ").length > 20 && "..."}
            </p>

            {/* Adults Input */}
            <div className="mb-3">
              <label className="form-label mb-2" style={{ fontSize: "14px", fontWeight: 500 }}>
                Adults:
              </label>
              <div className="d-flex align-items-center">
                <button
                  type="button"
                  className="btn btn-outline-secondary"
                  onClick={decrementAdults}
                  disabled={personsPerTent <= 1}
                  style={{
                    width: "40px",
                    height: "40px",
                    padding: 0,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    borderTopRightRadius: 0,
                    borderBottomRightRadius: 0,
                  }}
                >
                  <i className="bx bx-minus" style={{ fontSize: "20px" }}></i>
                </button>
                <input
                  type="number"
                  className="form-control text-center"
                  value={personsPerTent}
                  onChange={(e) => {
                    const value = parseInt(e.target.value, 10);
                    if (!isNaN(value)) {
                      handleAdultsChange(value);
                    }
                  }}
                  min={1}
                  max={beds}
                  style={{
                    width: "80px",
                    height: "40px",
                    borderRadius: 0,
                    borderLeft: "none",
                    borderRight: "none",
                  }}
                />
                <button
                  type="button"
                  className="btn btn-outline-secondary"
                  onClick={incrementAdults}
                  disabled={personsPerTent >= beds}
                  style={{
                    width: "40px",
                    height: "40px",
                    padding: 0,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    borderTopLeftRadius: 0,
                    borderBottomLeftRadius: 0,
                  }}
                >
                  <i className="bx bx-plus" style={{ fontSize: "20px" }}></i>
                </button>
              </div>
            </div>

            <div className="d-flex justify-content-between">
              <Link
                style={{ color: "white" }}
                className="btn style1 rounded py-2 px-4"
                prefetch={true}
                href={buildDetailsUrl()}
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
  }
);

TentCard.displayName = "TentCard";

export default TentCard;
