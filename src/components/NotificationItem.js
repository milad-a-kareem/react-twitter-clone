import { ReactComponent as StarIcon } from "../assets/icons/filled/special-star.svg";
import { ReactComponent as LikedIcon } from "../assets/icons/filled/liked.svg";
import { ReactComponent as UserIcon } from "../assets/icons/filled/profile.svg";
import { ReactComponent as RetweetIcon } from "../assets/icons/filled/retweet.svg";

function NotificationItem({ category, user, users, tweetText, followed }) {
  let icon;
  switch (category) {
    case "like":
      icon = <LikedIcon className="fill-red" />;

      break;
    case "followU":
      icon = <UserIcon className="fill-blue" />;

      break;
    case "retweet":
      icon = <RetweetIcon className="fill-green" />;

      break;
    case "followIt":
      icon = <StarIcon className="fill-purple" />;

      break;

    default:
      break;
  }
  return (
    <div className="flex items-start justify-start gap-3 px-4 py-3 border-b border-xlight-gray hover:bg-xxlight-gray cursor-pointer">
      <div className="w-12 h-12 flex items-start justify-end shrink-0">
        <div className="w-[30px] h-[30px]">{icon}</div>
      </div>
      <div className="flex flex-col grow max-w-full items-stretch justify-start text-dark-gray">
        {(user || users) && (
          <div className="flex justify-start items-center gap-2">
            {user && (
              <div className="w-8 h-8 rounded-full overflow-hidden">
                <img src={user.profileImage} alt="" className="w-full h-full" />
              </div>
            )}
            {users &&
              users.map((user) => (
                <div
                  key={Math.round(Math.random() * 10000000)}
                  className="w-8 h-8 rounded-full overflow-hidden"
                >
                  <img
                    src={user.profileImage}
                    alt=""
                    className="w-full h-full"
                  />
                </div>
              ))}
          </div>
        )}
        {users && category === "followU" && (
          <div className=" py-3">
            {users.map((user, i) => {
              return (
                <>
                  {i === users.length - 1 && <span>{" and "}</span>}
                  <span className="font-bold text-black">{`${user.display_name}`}</span>
                  {users.length > 2 && i < users.length - 1 && (
                    <span>{", "}</span>
                  )}
                </>
              );
            })}
            <span>{" followed you"}</span>
          </div>
        )}
        {users && category === "followIt" && (
          <div className=" py-3">
            {users.map((user, i) => {
              return (
                <>
                  {i === users.length - 1 && <span>{" and "}</span>}
                  <span className="font-bold text-black">{`${user.display_name}`}</span>
                  {users.length > 2 && i < users.length - 1 && (
                    <span>{", "}</span>
                  )}
                </>
              );
            })}
            <span>{" followed "}</span>
            <span className="font-bold text-black">
              {followed.display_name}
            </span>
          </div>
        )}
        {(category === "like" || category === "retweet") && (
          <div className="py-3">
            <span>{category === "like" ? "lik" : category}ed </span>
            <span>{" your tweet"}</span>
          </div>
        )}
        {tweetText && <div>{tweetText}</div>}
      </div>
    </div>
  );
}

export default NotificationItem;
