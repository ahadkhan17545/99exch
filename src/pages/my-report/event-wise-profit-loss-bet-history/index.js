// import './App.css';
import "../../../App.css";
import { useState, useEffect } from "react";
import { Table, Pagination } from "antd";
import { useLocation } from "react-router-dom";
import axios from "axios";
import Appconfig from "../../../config/config";

function EventWiseProfitLossBetHistory() {
  const userInfo = JSON.parse(localStorage.getItem("userdata"));

  const location = useLocation();
  const {
    from_date,
    to_date,
    event_type,
    is_casino,
    event_id,
    market_id,
    betting_type,
    selection_id,
    user_idd,
  } = location.state || {};

  const user_id = user_idd ? user_idd : userInfo?._id;

  const [formData, setFormData] = useState({
    user_id: user_id,
    match_id: event_id,
    market_id: market_id,
    event_type: event_type,
    is_casino: is_casino,
    from_date: from_date,
    to_date: to_date,
  });

  let locale = {
    emptyText: "No data!",
  };
  const columns = [
    {
      title: "Sport Name",
      sorter: true,

      render: (_, record) =>
        record.event_type == 4 ? (
          <div className="font-extrabold text-[#212529] text-[0.813rem] ">
            Cricket
          </div>
        ) : record.event_type == 2 ? (
          <div className="font-extrabold text-[#212529] text-[0.813rem] ">
            Tennis
          </div>
        ) : record.event_type == 1 ? (
          <div className="font-extrabold text-[#212529] text-[0.813rem] ">
            Soccer
          </div>
        ) : record.event_type == 777 ? (
          <div className="font-extrabold text-[#212529] text-[0.813rem] ">
            WCO Casino
          </div>
        ) : record.event_type == 7 ? (
          <div className="font-extrabold text-[#212529] text-[0.813rem] ">
            Horse Racing
          </div>
        ) : record.event_type == 66102 ? (
          <div className="font-extrabold text-[#212529] text-[0.813rem] ">
            Casino
          </div>
        ) : record.event_type == 4339 ? (
          <div className="font-extrabold text-[#212529] text-[0.813rem] ">
            Greyhound Racing
          </div>
        ) : record.event_type == 27979456 ? (
          <div className="font-extrabold text-[#212529] text-[0.813rem] ">
            Kabaddi
          </div>
        ) : record.event_type == 7522 ? (
          <div className="font-extrabold text-[#212529] text-[0.813rem] ">
            Basketball
          </div>
        ) : record.event_type == 2378961 ? (
          <div className="font-extrabold text-[#212529] text-[0.813rem] ">
            Politics
          </div>
        ) : record.event_type == 66101 ? (
          <div className="font-extrabold text-[#212529] text-[0.813rem] ">
            Virtual
          </div>
        ) : record.event_type == 66104 ? (
          <div className="font-extrabold text-[#212529] text-[0.813rem] ">
            Lottery
          </div>
        ) : (
          <div className="font-extrabold text-[#212529] text-[0.813rem] ">
            Casino
          </div>
        ),
    },
    {
      title: "Event Name",
      sorter: true,

      render: (_, record) => (
        <div className="font-extrabold text-[#212529] text-[0.813rem]">
          {record?.event_type == 777
            ? record.remarks.split("(")[0].trim()
            : record.event_name}
        </div>
      ),
    },
    {
      title: "Market Name",
      sorter: true,

      render: (_, record) => (
        <div className="font-extrabold text-[#212529] text-[0.813rem]">
          {record?.event_type == "777"
            ? record?.game_code
            : record?.market_name}
        </div>
      ),
    },
    {
      title: "Selection Name",
      sorter: true,

      render: (_, record) => (
        <div className="font-extrabold text-[#212529] text-[0.813rem]">
          {record?.event_type == "777" ? "-" : record?.runner_name}
        </div>
      ),
    },
    {
      title: "Winner",
      sorter: true,

      render: (_, record) => (
        <div className="font-extrabold text-[#212529] text-[0.813rem]">
          {record?.event_type == "777" ? "-" : record?.result_name}
        </div>
      ),
    },
    {
      title: "Bet Type",
      sorter: true,

      render: (_, record) =>
        record.event_type == "777" ? (
          <div className="">{record?.transaction_type}</div>
        ) : record.is_back ? (
          <div className="font-extrabold text-[#212529] text-[0.813rem]">
            BACK
          </div>
        ) : (
          <div className="font-extrabold text-[#212529] text-[0.813rem]">
            Lay
          </div>
        ),
    },
    {
      title: "User Price",
      sorter: true,

      render: (_, record) => (
        <div className="font-extrabold text-[#212529] text-[0.813rem]">
          {record?.event_type == "777"
            ? "-"
            : Number(record.price_val).toFixed(2)}
        </div>
      ),
    },
    {
      title: "Amount",
      sorter: true,

      render: (_, record) => (
        <div className="font-extrabold text-[#212529] text-[0.813rem]">
          {record?.event_type == "777" ? "-" : Number(record.stake).toFixed(2)}
        </div>
      ),
    },

    {
      title: "Profit/Loss",
      dataIndex: "name",
      sorter: true,
      render: (_, record) =>
        record?.event_type == "777" ? (
          <span
            className={`font-extrabold ${
              record.transaction_type == "Debit"
                ? "text-[#ff0000]"
                : "text-[#008000]"
            }  text-[0.813rem]`}
          >
            {record?.amount?.toFixed(2)}
          </span>
        ) : (
          <span
            className={`font-extrabold ${
              record.totalPL < 0 ? "text-[#ff0000]" : "text-[#008000]"
            }  text-[0.813rem]`}
          >
            {record?.totalPL?.toFixed(2)}
          </span>
        ),
    },

    {
      title: "Place Date",
      sorter: true,
      render: (_, record) => (
        <div className="font-extrabold text-[#212529] text-[0.813rem]">
          {new Date(record.createdAt).toLocaleString()}
        </div>
      ),
    },
    {
      title: "Settle Time",
      sorter: true,
      render: (_, record) => (
        <div className="font-extrabold text-[#212529] text-[0.813rem]">
          {new Date(record.createdAt).toLocaleString()}
        </div>
      ),
    },
  ];

  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [current, setCurrent] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [selectDataType, setSelectDataType] = useState("All");

  const handleFirst = () => setCurrent(1);
  const handleLast = () =>
    setCurrent(Math.ceil(filteredData?.length / pageSize));

  const startIndex = (current - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const paginatedData =
    filteredData?.length > 0 && filteredData.slice(startIndex, endIndex);

  const rowStyle = (record) => {
    return {
      style: {
        backgroundColor: record.is_back ? "#72bbef" : "#faa9ba",
      },
    };
  };

  useEffect(() => {
    filterProfitLossBetHistory();
  }, [selectDataType]);

  const filterProfitLossBetHistory = async (e) => {
    var data = JSON.stringify(formData);

    var config = {
      method: "post",
      url: `${Appconfig.apiUrl}reports/eventWiseAuraProfitLossBetHistoryNew`,
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        try {
          console.log(response.data.resultData);
          if (
            response.data.resultData?.length > 0 &&
            (selectDataType == "Back" || selectDataType == "Lay")
          ) {
            const filteredData = response.data.resultData?.filter((item) =>
              selectDataType == "Back"
                ? item.is_back == true
                : item.is_back == false
            );
            setFilteredData(filteredData);
          } else {
            setFilteredData(response.data.resultData);
          }
        } catch (e) {
          // postErrorToslack(e.message);
        }
      })
      .catch(function (error) {
        console.log(error);
        // postErrorToslack(error.message);
      });
  };

  return (
    <div className="grid grid-cols-12 relative ">
      <div className="col-span-12  mb-[1.5rem] lg:mb-[0px]">
        <div className=" flex-[0_0_auto] w-full max-w-full">
          <div className="border-r-[1px] border-r-[#c8ced3] border-l-[1px] border-l-[#c8ced3] mb-[24px]  relative flex flex-col min-w-[0] text-[#212529] [word-wrap:break-word] bg-[#fff] bg-clip-border border-[1px] border-[solid] border-[#0000002d] rounded-[.375rem]">
            <div className="bg-[linear-gradient(-180deg,_#2E4B5E_0%,_#243A48_82%)] text-[#ffffff] font-bold text-[0.938rem] px-[10px] py-[5px] [word-wrap:break-word] rounded-t-[5px]">
              <span className="text-[#ffffff] font-bold text-[0.938rem]  py-[5px] [word-wrap:break-word]">
                Bet History
              </span>
            </div>

            <div className="flex gap-[5px] items-center justify-end w-full p-[10px]">
              {["All", "Back", "Lay", "Void"].map((label) => (
                <div key={label} className="flex items-center">
                  <span className="m-1">{label}</span>
                  <input
                    type="radio"
                    name="dataType"
                    value={label}
                    checked={selectDataType === label}
                    onChange={() => setSelectDataType(label)} // ✅ onChange instead of onClick
                    className="cursor-pointer"
                  />
                </div>
              ))}
            </div>

            <div className="p-[1.25rem] flex-auto ">
              <Table
                locale={locale}
                columns={columns}
                className="event-pl"
                bordered
                dataSource={paginatedData}
                onRow={(record) => rowStyle(record)}
                pagination={false} // Disable default pagination
              />
              <div className="grid grid-cols-12 items-center pt-[1.5rem] lg:pt-[.75rem] text-[#333]">
                <div className="col-span-12 lg:col-span-6 text-[#333] text-[0.813rem]">
                  Showing {startIndex + 1} to {endIndex} of{" "}
                  {filteredData?.length} entries
                </div>
                <div className="col-span-12 lg:col-span-6 flex items-center justify-end  pt-[1rem] lg:pt-[0px] lg:mt-[0rem]">
                  <button
                    className="text-[0.813rem] cursor-default text-[#666] border-[1px] border-[solid] border-[transparent] bg-transparent [box-shadow:none] box-border inline-block min-w-[1.5em] px-[1em] py-[.5em] ml-[2px] text-center no-underline rounded-[2px] cursor-pointer"
                    type="button"
                    onClick={handleFirst}
                    style={{ marginRight: 8 }}
                  >
                    First
                  </button>
                  <Pagination
                    current={current}
                    pageSize={pageSize}
                    total={filteredData?.length}
                    onChange={(page) => setCurrent(page)}
                    itemRender={(page, type, originalElement) => {
                      if (type === "prev") {
                        return (
                          <button type="button" className="!cursor-pointer">
                            Previous
                          </button>
                        );
                      }
                      if (type === "page") {
                        return null; // Hide page numbers
                      }
                      if (type === "next") {
                        return (
                          <button type="button" className="!cursor-pointer">
                            Next
                          </button>
                        );
                      }
                      return originalElement;
                    }}
                    showSizeChanger={false} // Disable default page size changer
                  />
                  <button
                    className="text-[0.813rem] cursor-default text-[#666] border-[1px] border-[solid] border-[transparent] bg-transparent [box-shadow:none] box-border inline-block min-w-[1.5em] px-[1em] py-[.5em] ml-[2px] text-center no-underline rounded-[2px]  cursor-pointer"
                    type="button"
                    onClick={handleLast}
                    style={{ marginLeft: 8 }}
                  >
                    Last
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EventWiseProfitLossBetHistory;
