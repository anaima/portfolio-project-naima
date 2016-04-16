class Project < ActiveRecord::Base
  mount_uploader :picture, PictureUploader
  
  # def store_dimensions
  #   if file && model
  #     model.width, model.height = `identify -format "%wx%h" #{file.path}`.split(/x/)
  #   end
  # end
  # include FriendlyId
  # friendly_id :title, use: :slugged
  #
  # def slug
  #     "#{self.title} #{self.id}"
  # end

  #validates :slug, uniqueness: true, presence: true

  # has_attached_file :picture, styles: { medium: "300x300>", thumb: "100x100>" }, default_url: "../tobecontinued.jpeg"
  # validates_attachment_content_type :picture, content_type: /\Aimage\/.*\Z/

  before_save :set_slug

  private

  def set_slug
    self.slug = self.title.parameterize
  end

end
