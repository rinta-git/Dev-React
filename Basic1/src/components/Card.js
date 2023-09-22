import { CARD_IMG } from "../utils/constants";

const Card = (props) => {
  const { restaurentDetails } = props;
  const { name, cuisines, avgRating, locality, cloudinaryImageId } =
    restaurentDetails;
  return (
    <div className="m-4 p-4 w-[230px] hover:scale-95" data-testid="resCards">
      <div className="min-h-max">
        <img
          className="rounded-xl w-full max-h-44"
          src={CARD_IMG + cloudinaryImageId}
          alt={name}
        />
      </div>
      <div className="items-start px-3 py-3">
        <div className="font-bold text-xl mb-2 truncate">{name}</div>
        <p className="font-bold text-lg flex">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 fill-green-800 border border-solid rounded-xl border-green-800"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
            />
          </svg>
          {avgRating}{" "}
        </p>
        <p className="font-bold text-sm text-gray-600">{locality}</p>
        <p className="text-gray-600 text-base truncate block">
          {cuisines.length && cuisines.join(", ")}
        </p>
      </div>
    </div>
  );
};

export const VegCard = (Card) => {
  return (props) => {
    return (
      <div className="relative">
        <label className="absolute bg-green-600 text-white mt-2 p-2 rounded-md">
          Pure Veg
        </label>
        <Card {...props} />
      </div>
    );
  };
};

export default Card;
