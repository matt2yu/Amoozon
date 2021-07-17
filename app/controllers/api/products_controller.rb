class Api::ProductsController < ApplicationController

  def index
    @products = []
    if search_params && category_params
      search_params.each do |keyword|
        @products.concat(Product.where(":tag = ANY (keywords)", tag: keyword.downcase).where(category: category_params))
      end
    elsif category_params
      @products.concat(Product.where(category: category_params))
    elsif search_params
      search_params.each do |keyword|
        @products.concat(Product.where(":tag = ANY (keywords)", tag: keyword.downcase))
      end
    end
    render :index
  end

  def show
    @product = Product.find(params[:id])
    render :show
  end

  private

  def search_params
    return nil if params[:search].length == 0
    params[:search].split(' ')
  end

  def category_params
    return nil if params[:category].length == 0
    params[:category]
  end
end