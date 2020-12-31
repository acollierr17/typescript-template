it('should log "hello world" in the console', () => {
  console.log = jest.fn()
  console.log("hello world")
  expect(console.log).toHaveBeenCalledWith('hello world')
})
