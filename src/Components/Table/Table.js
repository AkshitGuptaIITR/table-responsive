import React from "react";
import style from "./Table.module.css";
import useWindowWidth from "../../Hooks/useWindowWidth";
import camelCaseToText from "../../common/camelCaseToText";

const Table = () => {
  const windowWidth = useWindowWidth();

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
        {windowWidth >= 758 ? (
          <table>
            <thead>
              <th>S.No</th>
              <th>Title</th>
              <th>Budget</th>
              <th>Release Date</th>
              <th>Runtime</th>
              <th>Vote Average</th>
            </thead>
            <tbody>
              {tableData.map((data, index) => {
                return (
                  <tr className={index % 2 === 0 ? style.alternateColor : null}>
                    <td>{index + 1}</td>
                    <td>{data.title}</td>
                    <td>{data.budget}</td>
                    <td>{data.releaseDate}</td>
                    <td>{data.runTime}</td>
                    <td>{data.votes}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        ) : (
          <table>
            <tbody>
              {tableData.map((data, idx) => {
                return (
                  <tr className={idx % 2 === 0 ? style.alternateColor : null}>
                    <tr>
                      <th>S.No</th>
                      <td>{idx + 1}</td>
                    </tr>
                    {Object.keys(data).map((key) => {
                      return (
                        <tr>
                          <th>{camelCaseToText(key)}</th>
                          <td>{data[key]}</td>
                        </tr>
                      );
                    })}
                  </tr>
                );
              })}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default Table;
