class Api::V1::ThingsController < Api::ApiController
  skip_before_action :verify_authenticity_token
  before_action :set_thing, only: [:show, :update, :destroy]

  def index
    things = Thing.all.order(created_at: :desc)
    render json: things
  end

  def create
    @thing = Thing.create(thing_params)
    if @thing.save
      render json: @thing
    else
      render json: { errors: @thing.errors }, status: :unprocessable_entity
    end
  end

  def show
    render json: @thing.to_json
  end

  def update
    if @thing.update(thing_params)
      render json: @thing
    else
      render json: @thing.errors, status: :unprocessable_entity
    end
  end

  def destroy
    @thing&.destroy
    render json: { message: "Deleted" }
  end

  private

  def thing_params
    params.permit(:name, :content, :header_image)
  end

  def set_thing
    @thing = Thing.find(params[:id])
  end
end
