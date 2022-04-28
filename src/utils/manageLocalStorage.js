function manageLocalStorage(name, action, data = null) {
  if (!name || typeof name !== 'string') throw new Error('unset required first parameter: string name of a localStorage data');
  if (action !== 'get' && action !== 'set') throw new Error('wrong required second parameter: action get or set string type')
  if (action === 'set' && !data) throw new Error('unset third parameter: data is required with set action')

  switch (action) {
    case 'get':
      return JSON.parse(localStorage.getItem(name))
    case 'set':
      localStorage.setItem(name, JSON.stringify(data))
      return undefined
    default:
      return undefined
  }
}

export { manageLocalStorage };