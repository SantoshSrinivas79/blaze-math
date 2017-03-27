function math () {
  let result = ( terms, cb ) => terms.pop() && terms.reduce( cb );

  return {
    mul ( ...terms ) { return result( terms, ( a, b ) => a * b ); },
    div ( ...terms ) { return result( terms, ( a, b ) => b ? a / b : 0 ); },
    sum ( ...terms ) { return result( terms, ( a, b ) => a + b ); },
    sub ( ...terms ) { return result( terms, ( a, b ) => a - b ); },
  }
}

Template.registerHelper( 'math', math );
