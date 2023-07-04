import React from 'react'
import SliderComponent from './common/SliderComponent'

const SliderSelect = ({ data, setData }) => {
  console.log(data) /* console.log To check destructuring ({data, setData}) */
  const bank_limit = 10000
  return (
    <>                       {/* <></> Empty DOM acts as a parent element */}
      <SliderComponent
        label="Home Value"
        min={1000}
        max={bank_limit}                  /* limit set to const */
        default={data.homeValue}          /* Access value from App.js userState hook */
        value={data.homeValue}
        step={100}                        /* value increasing and edecreasing by 100 points */
        onChange={(e, value) => setData({
          ...data,                        /*Use spread operator to get all the old data */
          downPayment: value * 0.2,
          loanAmount: value * 0.8,         /* By default gies the home value i.e., down payement+loan amount */
          homeValue: value                 /* cursor moving according to homeValue */
        })}
        unit='$'
        amount={data.homeValue}
      />      {/*If we pass the props within SliderSelect then we have to receive the props within SliderComponent*/}
      <SliderComponent
        label="Down payment"
        min={0}
        max={data.homeValue}      /* down payment should not be greater than home value */
        default={data.downPayment}
        value={data.downPayment}
        step={100}
        onChange={(e, value) => setData({
          ...data,
          loanAmount: (data.homeValue - value),  /* loan amount gets adjusted as the down payment is changed */
          downPayment: value                 /* cursor moving according to homeValue */
        })}
        unit='$'
        amount={data.downPayment}
      />
      <SliderComponent
        label="Loan Amount"
        min={0}
        max={data.homeValue}
        default={data.loanAmount}
        value={data.loanAmount}
        step={5}
        onChange={(e, value) =>  setData({
          ...data,
          downPayement: (data.homeValue - value), /* loan amount gets updated as the down payement is changed */
          loanAmount: value                 /* cursor moving according to homeValue */
        })}
        unit='$'
        amount={data.loanAmount}
      />
      <SliderComponent
        label="Interest Rate"
        min={2}
        max={18}
        default={data.interestRate}
        value={data.interestRate}
        step={1}
        onChange={(e, value) =>  setData({
          ...data,
          interestRate: value                 /* cursor moving according to homeValue */
        })}
        unit='%'
        amount={data.interestRate}
      />
    </>
  );
};

export default SliderSelect
