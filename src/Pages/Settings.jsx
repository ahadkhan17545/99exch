import { useEffect, useState } from "react";
import Appconfig from "../config/config";
import { useNavigate } from "react-router-dom";
import { NotificationManager } from "react-notifications";
import axios from "axios";
import Helper from "../helper";

function Settings() {
  const userInfo = Helper();
  const navigate = useNavigate();
  const [chipList, setchipList] = useState([]);

  useEffect(() => {
    getChips();
  }, []);

  const getChips = async () => {
    var data = JSON.stringify({ user_id: userInfo._id });
    var config = {
      method: "post",
      url: `${Appconfig.apiUrl}chips/getChips`,
      headers: { "Content-Type": "application/json" },
      data: data,
    };
    axios(config)
      .then(function (response) {
        try {
          setchipList(response.data);
        } catch (e) {
          console.log(e);
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const handleInputChange = (event) => {
    let index = event.target.getAttribute("data-id");
    chipList[index]["chip_value"] = parseFloat(
      event.target.value === "" ? 0 : event.target.value
    );
    setchipList([...chipList]);
  };

  function updateChips(chipList) {
    let newdata = chipList.map((chip) => ({
      _id: chip._id,
      chip_value: document.getElementById("stakeEdit_8" + chip._id).value,
    }));
    var data = JSON.stringify({ data: newdata });
    var config = {
      method: "post",
      url: `${Appconfig.apiUrl}chips/updateMultipleChips`,
      headers: { "Content-Type": "application/json" },
      data: data,
    };
    axios(config)
      .then(function (response) {
        if (response.data.ok) {
          NotificationManager.success("Stake Update Successfully!", "", 3000);
          getChips();
          setTimeout(() => navigate("/"), 2000);
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  return (
    <div className="p-3">
      <p className="rounded bg-[#343435] p-1 shadow text-[var(--secondary-color)] text-[15px] font-bold uppercase">
        <span className="px-2">Settings</span>
      </p>

      <p className="bg-white my-[7px] mb-[4px] p-1 text-black text-[12px] font-normal">
        <span>Edit Stakes</span>
      </p>

      <div className="grid grid-cols-3 gap-4 justify-center items-center">
        {chipList.map((row, index) => (
          <label key={index} className=" flex justify-center">
            <input
              id={`stakeEdit_8${row._id}`}
              type="text"
              pattern="[0-9]*"
              className=" p-1 text-center border border-black text-sm rounded focus:outline-none"
              data-id={index}
              value={row.chip_value}
              onChange={handleInputChange}
            />
          </label>
        ))}
      </div>

      {chipList.length > 0 && (
        <div className="flex justify-center mt-4">
          <button
            onClick={() => updateChips(chipList)}
            className="px-4 py-2 text-[var(--secondary-color)] text-[16px] w-[110px] bg-[#1e262d] rounded"
          >
            Save
          </button>
        </div>
      )}
    </div>
  );
}

export default Settings;
