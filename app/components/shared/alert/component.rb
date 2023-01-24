# frozen_string_literal: true

module Shared

  module Alert

    # Component to handle flash messages
    class Component < ViewComponent::Base

      attr_reader :message, :kind, :timer

      def initialize(message: nil, kind: "success", timer: "2000")
        @message = message
        @kind = kind
        super
      end

      def switch_style
        case kind
        when "success"
          "alert-success"
        when "error"
          "alert-error"
        else
          "alert-warning"
        end
      end

      def render?
        !message.nil?
      end

    end

  end

end
