import request from "api/index"

export function getActIndex (data) {
    return request({
      url: '/api/actInfo/getActIndex',
      method: 'post',
      data
    })
  }