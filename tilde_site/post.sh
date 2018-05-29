
count=`wc -l < recent_posts.json`
awk -v text="$1" -v count="$count" 'NR==count{print "\""text"\""}' recent_posts.json >> tmp
mv tmp recent_posts.json
