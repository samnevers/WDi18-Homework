require 'pry'
require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'

get "/" do
  erb :home
end

get "/about" do
  erb :about
end

get "/live_archive_index" do
  db = SQLite3::Database.new("database.db")
  db.result_as_hash = true;

  @all_live_archive = db.execute "SELECT * FROM live_archive"
  db.close
  erb :live_archive_index
end

get "/live_archive/new" do
  erb :live_archive_new
end

post "/live_archive_index" do
  db = SQLite3::Database.new("database.db")
  db.result_as_hash = true;

  sql = "INSERT INTO live_archive (date, location, image, setlist, video, quote) VALUES ('#{params["date"]}', '#{params["location"]}', '#{params["image"]}', '#{params["setlist"]}', '#{params["video"]}', '#{params["quote"]}')"

  db.execute sql
  db.close

  redirect "/live_archive_index"
end

get "live_archive/:id" do
  @id = params["id"]

  db = SQLite3::Database.new("database.db")
  db.result_as_hash = true;

  sql = "SELECT * FROM live_archive WHERE id == #{@id}"

  @live_archive = db.execute(sql).first

  db.close

  erb :live_archive_show
end

post "/live_archive/:id" do
  @id = params["id"]

  db = SQLite3::Database.new("database.db")
  db.results_as_hash = true;

  sql = "UPDATE live_archive SET date = '#{params['date']}', location = '#{params['location']}', image = '#{params['image']}', setlist = #{params['setlist']}, video = #{params['video']}, '#{params['quotes']}' WHERE id == #{@id}"
  db.execute sql

  db.close

  redirect "live_archive/#{@id}"

end
