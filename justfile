# Plot
plot:
	duckdb -c "copy (select path,count(path) as c from logrecords.parquet group by path order by c desc limit 20) to '/dev/stdout';" | uplot bar -d,

# Server
server:
	python3 -m http.server
