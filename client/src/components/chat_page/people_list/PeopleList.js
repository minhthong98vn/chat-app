import React from "react";
import { useDispatch } from "react-redux";
import {
  addConversationAction,
  getConversationAction,
} from "../../../redux/actions/ConservationAction";

function PeopleList({ peopleList, ownerInfo }) {
  const dispatch = useDispatch();
  const people = peopleList.filter((p) => p.id !== ownerInfo._id);
  const createConversationHandler = (receiverId) => {
    dispatch(
      addConversationAction({
        senderId: ownerInfo._id,
        receiverId,
      })
    );
    setTimeout(() => {
      dispatch(getConversationAction(ownerInfo));
    }, 0);
  };
  const renderPeople = () => {
    return people?.map((person, index) => {
      return (
        <div
          key={index}
          className="card-content-profil pt-3 flex justify-between items-center"
        >
          <div className=" flex gap-x-2 items-center">
            <img
              className="avatar h-10 w-10 rounded-full border-4 border-opacity-40"
              src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAASABIAAD/4QCuRXhpZgAATU0AKgAAAAgABQESAAMAAAABAAEAAAEaAAUAAAABAAAASgEbAAUAAAABAAAAUgExAAIAAAAhAAAAWodpAAQAAAABAAAAfAAAAAAAAABIAAAAAQAAAEgAAAABQWRvYmUgUGhvdG9zaG9wIDIxLjAgKE1hY2ludG9zaCkAAAADoAEAAwAAAAEAAQAAoAIABAAAAAEAAABAoAMABAAAAAEAAABAAAAAAP/hC1lodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IlhNUCBDb3JlIDYuMC4wIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RDM4NzEyOTk1NEU1MTFFQkE5NUFBNDNDN0ExMTE5QUMiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RDM4NzEyOTg1NEU1MTFFQkE5NUFBNDNDN0ExMTE5QUMiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo3NTAxMDgwNDEyMTAxMUVBOTNGNUU1NkMyNEY0RUY2MCIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgMjEuMCAoTWFjaW50b3NoKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjUzZDhlNGZmLWRkMDctNDQxZC04ZDlhLTRhNjcxYmI5OGMzNyIgc3RSZWY6ZG9jdW1lbnRJRD0iYWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOjY5ZWQxZGVkLTZmNzYtNWM0MS1iZGIwLWU0OWNkMjVjYzhlMyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8P3hwYWNrZXQgZW5kPSJ3Ij8+AP/tADhQaG90b3Nob3AgMy4wADhCSU0EBAAAAAAAADhCSU0EJQAAAAAAENQdjNmPALIE6YAJmOz4Qn7/wAARCABAAEADASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn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"
              alt="1"
            />
            <div className="text-xs">
              <h3 className="font-semibold">{person.name}</h3>
              {/* <div className=" flex items-center gap-x-1">
                <span className="h-3 w-3 rounded-full bg-green-500" />
                <span>Online</span>
              </div> */}
            </div>
          </div>
          <div>
            <button
              onClick={() => {
                createConversationHandler(person.id);
              }}
              className="flex items-center px-2 py-1 text-xs text-white bg-green-500 hover:bg-green-600"
            >
              <svg
                className="w-3 h-3"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                />
              </svg>
              <span className>Invite</span>
            </button>
          </div>
        </div>
      );
    });
  };
  return (
    <div
      className="card-content divide-y p-2 flex flex-col gap-y-3 mt-5 overflow-y-auto"
      style={{ maxHeight: "77.5vh" }}
    >
      {renderPeople()}
      {/* <div className="card-content-profil pt-3 flex justify-between items-center">
        <div className=" flex gap-x-2 items-center">
          <img
            className="avatar h-10 w-10 rounded-full border-4 border-opacity-40"
            src="https://source.unsplash.com/user/erondu"
            alt="1"
          ></img>
          <div className="text-xs">
            <h3 className="font-semibold">Jose Leos</h3>
            <div className=" flex items-center gap-x-1">
              <span className="h-3 w-3 rounded-full bg-yellow-500" />
              <span>Busy</span>
            </div>
          </div>
        </div>
        <div className="card-action">
          <button className="flex items-center px-2 py-1 text-xs text-white bg-green-500 hover:bg-green-600">
            <svg
              className="w-3 h-3"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
              />
            </svg>
            <span className>Invite</span>
          </button>
        </div>
      </div>
      <div className="card-content-profil pt-3 flex justify-between items-center">
        <div className=" flex gap-x-2 items-center">
          <img
            className="avatar h-10 w-10 rounded-full border-4 border-opacity-40"
            src="https://ui.glass/generator/static/profile-picture-3-b701fcb37cb1fef6a7e720dccd16e4c0.jpg"
            alt="1"
          />
          <div className="text-xs">
            <h3 className="font-semibold">Jeny Green</h3>
            <div className=" flex items-center gap-x-1">
              <span className="h-3 w-3 rounded-full bg-red-500" />
              <span>Offline</span>
            </div>
          </div>
        </div>
        <div className="card-action">
          <button className="flex items-center px-2 py-1 text-xs text-white bg-green-500 hover:bg-green-600">
            <svg
              className="w-3 h-3"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
              />
            </svg>
            <span className>Invite</span>
          </button>
        </div>
      </div> */}
    </div>
  );
}

export default PeopleList;
