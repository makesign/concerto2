
#!/bin/zsh

while true; do
    clear
    
    bin/rails test 
    fswatch **/*.rb -1
    
done