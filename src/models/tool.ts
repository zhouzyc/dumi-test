export const deepClone = (target: any, map: Map<any, any> = new Map()) => {
  if (target instanceof Date) {
    return new Date(target)
  } else if (target instanceof RegExp) {
    return new RegExp(target)
  } else if (target instanceof Object === false) {
    return target
  }
  let value:any = null
  if (value = map.get(target)) {
    return value
  }
  let tempObj: any = Array.isArray(target) ? [] : {}
  map.set(target, tempObj)
  Object.keys(target).forEach((key, index) => {
    tempObj[key] = deepClone(target[key], map)
  })
  return tempObj
}
