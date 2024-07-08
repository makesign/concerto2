# frozen_string_literal: true

class KindsController < ApplicationController
  respond_to :html, :json, :xml

  # GET /kinds
  # GET /kinds.xml
  def index
    authorize! :read, Kind
    @kinds = Kind.all
    respond_with(:kinds)
  end

  # GET /kinds/1
  # GET /kinds/1.xml
  def show
    @kind = Kind.find(params[:id])
    auth!
    respond_with(@kind) do |format|
      format.xml { render xml: @kind.to_xml(include: [:fields]) }
    end
  end

  # GET /kinds/new
  # GET /kinds/new.xml
  def new
    @kind = Kind.new
    auth!
    respond_with(:kind)
  end

  # GET /kinds/1/edit
  def edit
    @kind = Kind.find(params[:id])
    auth!
  end

  # POST /kinds
  # POST /kinds.xml
  def create
    @kind = Kind.new(kind_params)
    auth!

    flash[:notice] = t(:kind_created) if @kind.save

    respond_with(@kind)
  end

  # PUT /kinds/1
  # PUT /kinds/1.xml
  def update
    @kind = Kind.find(params[:id])
    auth!

    flash[:notice] = t(:kind_updated) if @kind.update(kind_params)
    respond_with(@kind)
  end

  # DELETE /kinds/1
  # DELETE /kinds/1.xml
  def destroy
    @kind = Kind.find(params[:id])
    auth!
    @kind.destroy
    respond_with(:kind)
  end

  private

  # Restrict the allowed parameters to a select set defined in the model.
  def kind_params
    params.require(:kind).permit(:name)
  end
end
