import { baseImgUrl } from "../constants";

const PlayCard = ({ player }) => {
  return (
    <div className="w-[140px] rounded-md">
      {player.profile_path ? (
        <img className="h-[175px]" src={baseImgUrl + player?.profile_path} />
      ) : (
        <div className="h-[175px] w-[116px] bg-gray-600"></div>
      )}
      <h2 className="txt-lg font-semibold">{player.original_name}</h2>
      <h2 className="line-clamp-2">{player.character}</h2>
    </div>
  );
};

export default PlayCard;
