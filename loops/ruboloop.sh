
#!/bin/bash

while true; do
    clear
    
    rubocop --parallel
    fswatch **/*.rb -1
    
done