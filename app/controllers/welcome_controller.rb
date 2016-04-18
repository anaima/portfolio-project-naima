class WelcomeController < ApplicationController
  def index
    @message = Message.new
  end

def create
  @message = Message.new message_params
  if @message.save
    cookies[:saved_message] = true
    redirect_to root_path
  else
    redirect_to root_path, alert: "No ! Try again !"
  end
end

private

def message_params
  params.require(:message).permit(:name, :email)
end

 def pdf
 send_file "#{Rails.root}/public/img/CV.pdf", :type=>"application/pdf", :x_sendfile=>true
 end
end
