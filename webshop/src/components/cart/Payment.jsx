import React from 'react'

function Payment(props) {

  const pay = () => {
    const url = "https://igw-demo.every-pay.com/api/v4/payments/oneoff";
    const data = {
      "api_username": "e36eb40f5ec87fa2",
      "account_name": "EUR3D1",
      "amount": props.sum,
      "order_reference": Math.random() * 9999999,
      "nonce": "a9b7f7e7" + new Date() + Math.random() * 9999999,
      "timestamp": new Date(),
      "customer_url": "https://react-04-2023.web.app"
      };
    const headers = {
      "Authorization": "Basic ZTM2ZWI0MGY1ZWM4N2ZhMjo3YjkxYTNiOWUxYjc0NTI0YzJlOWZjMjgyZjhhYzhjZA==",
      "Content-Type": "application/json"
    };

    fetch(url, {"method": "POST", "body": JSON.stringify(data), "headers": headers})
      .then(res => res.json())
      .then(json => window.location.href = json.payment_link);
  }

  // <Link> ---> HTMLs URLi vahetus   , kui ei ole koodilõiku
  // const navigate = useNavigate()      navigate("/uus-url")      url vahetus + koodilõik
  // window.location.href ---> väline URL

  return (
    <button onClick={pay}>Maksa</button>
  )
}

export default Payment