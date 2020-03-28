import React from "react"
import "./table.module.css"
import SelectButton from "../components/selectButton"

const Table = ({ data }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Free</th>
          <th>Plus</th>
          <th>Professional</th>
          <th>Visionary</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Price</td>
          <td>Price</td>
          <td>Price</td>
          <td>Price</td>
        </tr>
        <tr>
          <td>Price infos</td>
          <td>Price infos</td>
          <td>Price infos</td>
          <td>Price infos</td>
        </tr>
        <tr>
          <td>Plan description</td>
          <td>Plan description</td>
          <td>Plan description</td>
          <td>Plan description</td>
        </tr>
        <tr>
          <td>List item</td>
          <td>List item</td>
          <td>List item</td>
          <td>List item</td>
        </tr>
        <tr>
          <td>List item</td>
          <td>List item</td>
          <td>List item</td>
          <td>List item</td>
        </tr>
        <tr>
          <td>List item</td>
          <td>List item</td>
          <td>List item</td>
          <td>List item</td>
        </tr>
        <tr>
          <td>
            <SelectButton title="Select" />
          </td>
          <td>
            <SelectButton title="Select" />
          </td>
          <td>
            <SelectButton title="Select" />
          </td>
          <td>
            <SelectButton title="Select" />
          </td>
        </tr>
      </tbody>
    </table>
  )
}

export const query = graphql`
  query($slug: String!) {
    allProtonPlan(filter: { Currency: { eq: $slug } }) {
      nodes {
        Currency
        Amount
        Cycle
        Features
        MaxAddresses
        Name
        Amount
      }
    }
  }
`

export default Table