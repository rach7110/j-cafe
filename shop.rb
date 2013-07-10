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

post '/signups' do
  puts "\n" * 3
  puts "Received email: #{params[:email]}"
  puts "\n" * 3

  "Thanks for signing up!"
end
