
#!/bin/zsh

while true; do
    clear
    
    bin/rails test test/unit/feed_test.rb
    fswatch app/**/*.rb test/**/*.rb config/**/*.rb -1
    
done