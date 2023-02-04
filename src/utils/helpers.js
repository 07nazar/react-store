export const getBagItems = () => {
  const data = localStorage.getItem('bag')
  return data ? JSON.parse(data) : []
}

export const getHomeItems = () => {
  const data = localStorage.getItem('products')
  return data ? JSON.parse(data) : []
}

export const getTotalSum = () => {
  const arr = JSON.parse(localStorage.getItem('bag')) || []

  const sum = arr.reduce(
    (accumulator, currentValue) => accumulator + currentValue.count * currentValue.price,
    0,
  )
  const res = {
    items: sum,
    shipping: 6.99,
    gst: 0,
    card: 0,
  }

  let total

  if (res.items <= res.shipping + res.card + res.gst) {
    total = 0
  } else {
    total = res.items - res.shipping - res.card - res.gst
  }

  return {
    res: [
      { id: 1, type: 'Items:', count: res.items },
      { id: 2, type: 'Shipping:', count: res.shipping },
      { id: 3, type: 'Estimated GST:', count: res.gst },
      { id: 4, type: 'Gift Card:', count: res.card },
    ],
    total,
  }
}

export const setItemToLS = (data, propName) => {
  localStorage.setItem(propName, JSON.stringify(data))
}
