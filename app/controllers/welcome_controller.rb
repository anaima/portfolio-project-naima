class WelcomeController < ApplicationController
  def index

  end

def create
  @message = Message.new message_params

  respond_to do |format|
  if @message.save
    # cookies[:saved_message] = false
    format.html { redirect_to root_path, notice: "Merci pour votre inscription." }
    format.js {}
  else
    format.html { redirect_to root_path, alert: "Message non envoyé ! Réessayez !" }
  end
end
end

def pdf
send_file "#{Rails.root}/public/img/CV.pdf", :type=>"application/pdf", :x_sendfile=>true
end

private

def message_params
  params.require(:message).permit(:name, :email)
end


end
