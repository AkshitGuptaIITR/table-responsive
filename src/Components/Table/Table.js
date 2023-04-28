import React from "react";
import style from "./Table.module.css";

const Table = () => {
  const tableData = [
    {
      title: "Avatar",
      budget: 237000000,
      releaseDate: "2009-12-10",
      runTime: 162,
      votes: 7.2,
    },
    {
      title: "Titanic",
      budget: 200000000,
      releaseDate: "1997-11-18",
      runTime: 194,
      votes: 7.5,
    },
    {
      title: "The Avengers",
      budget: 220000000,
      releaseDate: "2012-04-25",
      runTime: 143,
      votes: 7.4,
    },
    {
      title: "Jurassic World",
      budget: 150000000,
      releaseDate: "2015-06-09",
      runTime: 124,
      votes: 6.5,
    },
    {
      title: "Furious 7",
      budget: 190000000,
      releaseDate: "2015-04-01",
      runTime: 137,
      votes: 7.3,
    },
  ];

  return (
    <div className={style.structure}>
      <h1>Sample Movie Table</h1>
      <div className={style.content}>
        <table>
          <tr>
            <th>S.No</th>
            <th>Title</th>
            <th>Budget</th>
            <th>Release Date</th>
            <th>Runtime</th>
            <th>Vote Average</th>
          </tr>
          {tableData.map((data, index) => {
            return (
              <tr>
                <td>{index + 1}</td>
                <td>{data.title}</td>
                <td>{data.budget}</td>
                <td>{data.releaseDate}</td>
                <td>{data.runTime}</td>
                <td>{data.votes}</td>
              </tr>
            );
          })}
        </table>
      </div>
    </div>
  );
};

export default Table;
