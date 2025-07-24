import React from "react";

const Rules = () => {
  return (
    <div>
      <div className="text-black p-3">
        <p className="rounded bg-[#343435] p-1 shadow text-[var(--secondary-color)] text-[15px] font-bold uppercase">
          <span className="px-2">Rules</span>
        </p>
        <div className="flex flex-col justify-center items-center p-5 text-center">
          <h4 className="text-xl lg:text-2xl font-bold underline mb-4">
            THE SITE RULES AND REGULATIONS
          </h4>
          <div className="w-full lg:w-[35%] h-auto p-3 rounded-lg border border-black bg-white">
            <p className="mb-4 text-sm text-start">
              These Rules and Regulations <strong>("Rules")</strong> are part of
              the Site's terms and conditions. The Rules apply to all bets
              placed on this online betting platform <strong>("Site")</strong>.
              The Rules consist of the following:
            </p>
            <ol className="list-disc ml-12 text-sm space-y-1 text-start">
              <li>This INTRODUCTION section (Part A);</li>
              <li>The GENERAL RULES (set out in Part B below); and</li>
              <li>
                The SPECIFIC SPORTS RULES (set out in Part C below - these apply
                to certain sports).
              </li>
            </ol>
            <h5 className="text-md font-medium mt-4 mb-2 text-start">
              The General Rules apply to all bets unless stated otherwise in the
              Specific Sports Rules. If there is any inconsistency between the
              Specific Sports Rules and the General Rules, the Specific Sports
              Rules shall prevail.
            </h5>

            <h5 className="text-md font-medium mt-2 text-start">
              The rules governing how markets are offered, managed and/or
              settled are not the same for every market on each product. In
              certain circumstances, a bet that is settled as a winner on one
              product may be settled as a loser on the other product (and vice
              versa). Additionally, different settlement rules may apply so
              that, for example, bets that are a winner on one product may be
              settled as a dead heat or be voided on the other product.
              Customers must ensure that they familiarise themselves with the
              relevant rules that apply to the bets that they place on the Site.
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rules;
