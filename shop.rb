require 'bundler/setup'

Bundler.require

get '/' do
  erb :index
end

get '/taxes' do
  # how many drinks * 100 cents
  Array(params[:drink]).length * 100
end

post '/shop' do
  'Thanks for your order'
end

