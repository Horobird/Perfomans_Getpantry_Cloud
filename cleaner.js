function cleaner (context, events, done) {
    context.vars['body']=['{"key": "", "newkey": ""}']
    return done () ;
}