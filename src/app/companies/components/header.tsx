import Link from "next/link";
import Image from "next/image";
import { useCompanyStore } from "../stores/useCompanyStore";

const Header = () => {
  const { companies, companyId } = useCompanyStore();

  return (
    <header className="flex flex-col md:flex-row justify-between items-center px-6 py-4 bg-blue-darkest-tractian text-white">
      <Image
        src="/assets/logo.png"
        alt="Tractian logo"
        width={103}
        height={14}
        className="mr-2"
      />
      <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4">
        {companies.map((company) => {
          return (
            <Link key={company.id} href={`/companies/${company.id}`} passHref>
              <button
                className={`flex items-center px-4 py-2 rounded transition text-sm md:text-base ${
                  companyId === company.id
                    ? "bg-blue-tractian"
                    : "bg-blue-dark-tractian hover:bg-blue-tractian"
                }`}
              >
                <Image
                  src="/assets/icons/boxes-icon.svg"
                  alt="Company Icon"
                  width={14}
                  height={14}
                  className="mr-2"
                />
                {company.name} Unit
              </button>
            </Link>
          );
        })}
      </div>
    </header>
  );
};

export default Header;
