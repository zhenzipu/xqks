// import xhr from 'SERVICE/xhr/'
// import msgService from 'SERVICE/msgService'
// ================================
// Action Type
// ================================
const ADD_TEST = 'ADD_TEST'

// ================================
// Action Creator
// ================================
const addTest = adminUserInfo => dispatch => {
  return dispatch({
    type: ADD_TEST,
    payload: adminUserInfo
  })
}

/* default 导出所有 Action Creators */
export default {
  addTest,
}

// ================================
// Action handlers for Reducer
// 本来更新 state 是 Reducer 的责任
// 但要把 ActionType 导出又引入实在太麻烦
// 且在 Reducer 中写 switch-case 实在太不优雅
// 故在此直接给出处理逻辑
// ================================
export const ACTION_HANDLERS = {
  [ADD_TEST]: (test, { payload }) => {
    // console.log('-------------------------->>>>>>>>>>>>>>>>>>>>>', adminUserInfo)
    return payload
  }
}
