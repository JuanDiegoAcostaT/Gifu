import React from "react";
import { Link } from "@reach/router";
import './Category.css'


export default function Category({name , options = []}) {
  return (
    <div>
      <h2>{name}</h2>
      <ul className="gif__trends">
        {options.map((singleOption) => (
          <li key={singleOption}>
            <Link to={`/search/${singleOption}`}>{singleOption}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
