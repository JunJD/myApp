let nextTodoId = 0
export const setGuardValue = res => {
  console.log(res);
  return (
    {
      type: 'SET_GuardValue',
      id: nextTodoId++,
      res
    }
  )
}