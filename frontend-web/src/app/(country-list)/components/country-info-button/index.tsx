"use client";

import { Button } from "@/components/button";
import { CountryEntity } from "@/domain/types/country";
import Link from "next/link";

type CountryInfoButtonProps = {
  countryData: CountryEntity;
};

export const CountryInfoButton = ({ countryData }: CountryInfoButtonProps) => {
  return (
    <Link href={`/country-info/${countryData.countryCode}`}>
      <Button
        key={countryData.countryCode}
        variant="secondary"
        className="w-full flex items-center gap-2 h-[unset] hover:bg-background/30 py-3"
      >
        <h2 className="truncate font-bold lg:text-[15px]">
          {countryData.name}
        </h2>

        <span className="flex-shrink-0 text-xs font-light lg:text-sm">
          ({countryData.countryCode})
        </span>
      </Button>
    </Link>
  );
};
