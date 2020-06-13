class Api::V1::ThingsController < Api::ApiController
  skip_before_action :verify_authenticity_token
  before_action :set_thing, only: [:show, :update, :destroy]

  def index
    things = Thing.all.order(created_at: :desc)
    json_response things
  end

  def create
    @thing = Thing.create(thing_params)
    if @thing.save
      json_response @thing
    else
      json_response ({ errors: @thing.errors }), status: :unprocessable_entity
    end
  end

  def show
    json_response @thing
  end

  def update
    if @thing.update(thing_params)
      json_response @thing
    else
      json_response @thing.errors, status: :unprocessable_entity
    end
  end

  def destroy
    @thing&.destroy
    json_response ({ message: "Deleted" })
  end

  private

  def thing_params
    params.permit(:name, :content, :header_image)
  end

  def set_thing
    @thing = Thing.find(params[:id])
  end
end
