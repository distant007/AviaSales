export const getId = () => {
  return function (dispatch) {
    fetch('https://aviasales-test-api.kata.academy/search')
      .then((res) => res.json())
      .then((id) => dispatch({ type: 'ID', payload: id.searchId }))
  }
}

export const getAviaTickets = (id) => {
  return function (dispatch) {
    fetch(`https://aviasales-test-api.kata.academy/tickets?searchId=${id}`)
      .then((res) => res.json())
      .then((json) => dispatch({ type: 'AVIA', payload: json.tickets, stop: json.stop }))
      .catch((err) => dispatch({ type: 'ERROR', payload: err }))
  }
}
