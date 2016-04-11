class Project < ActiveRecord::Base
  mount_uploader :picture, PictureUploader

  extend FriendlyId
  friendly_id :title, use: :slugged

  # has_attached_file :picture, styles: { medium: "300x300>", thumb: "100x100>" }, default_url: "../tobecontinued.jpeg"
  # validates_attachment_content_type :picture, content_type: /\Aimage\/.*\Z/
end
