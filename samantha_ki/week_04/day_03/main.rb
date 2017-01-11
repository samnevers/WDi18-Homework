require 'pry'
require 'sinatra'
require 'sinatra/reloader'
require 'httparty'

get "/" do
  erb :home
end

url = "http://www.omdbapi.com/?t="

get "/results" do
  @title = params["title"]
  result_url = url + @title
  erb :results
end
