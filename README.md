# hsw-srv

Porting hCaptcha's HSW hash generation library to Node

## Basic Usage

In order to solve, you need the site URL (not the domain!), and the site key, which can be found 
in the HTML of the website with the hCaptcha challenge.

Below is a basic example of how to use the solver with the two using a simple guessing solver.
```go
c, err := NewChallenge(siteUrl, siteKey)
if err != nil {
    panic(err)
}
err = c.Solve(&GuessSolver{})
if err != nil {
    panic(err)
}
fmt.Println(c.Token()) // P0_eyJ0eXAiOiJKV1QiLC...
```
