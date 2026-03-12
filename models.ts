/**
 * 数据来源：https://openrouter.ai/api/frontend/models/find?order=newest
 */

/**
 * 示例model数据： 
 *   {
        "slug": "z-ai/glm-5",
        "hf_slug": "zai-org/GLM-5",
        "updated_at": "2026-02-11T21:59:34.617041+00:00",
        "created_at": "2026-02-11T16:59:42+00:00",
        "hf_updated_at": null,
        "name": "Z.ai: GLM 5",
        "short_name": "GLM 5",
        "author": "z-ai",
        "description": "GLM-5 is Z.ai’s flagship open-source foundation model engineered for complex systems design and long-horizon agent workflows. Built for expert developers, it delivers production-grade performance on large-scale programming tasks, rivaling leading closed-source models. With advanced agentic planning, deep backend reasoning, and iterative self-correction, GLM-5 moves beyond code generation to full-system construction and autonomous execution.",
        "model_version_group_id": null,
        "context_length": 202752,
        "input_modalities": [
          "text"
        ],
        "output_modalities": [
          "text"
        ],
        "has_text_output": true,
        "group": "Other",
        "instruct_type": null,
        "default_system": null,
        "default_stops": [],
        "hidden": false,
        "router": null,
        "warning_message": "",
        "promotion_message": "",
        "routing_error_message": "",
        "permaslug": "z-ai/glm-5-20260211",
        "supports_reasoning": true,
        "reasoning_config": {
          "start_token": "\u003Cthink\u003E",
          "end_token": "\u003C/think\u003E",
          "default_reasoning_enabled": true,
          "reasoning_return_mechanism": "reasoning-content"
        },
        "features": {
          "reasoning_config": {
            "start_token": "\u003Cthink\u003E",
            "end_token": "\u003C/think\u003E",
            "default_reasoning_enabled": true,
            "reasoning_return_mechanism": "reasoning-content"
          },
          "chat_template_config": {

          }
        },
        "default_parameters": {
          "temperature": 1,
          "top_p": 0.95,
          "frequency_penalty": null
        },
        "default_order": [],
        "quick_start_example_type": "reasoning",
        "is_trainable_text": null,
        "is_trainable_image": null,
        "endpoint": {
          "id": "0f4b86e5-14aa-40d8-91a4-79b694fac8b5",
          "name": "Ambient | z-ai/glm-5-20260211",
          "context_length": 202752,
          "model": {
            "slug": "z-ai/glm-5",
            "hf_slug": "zai-org/GLM-5",
            "updated_at": "2026-02-11T21:59:34.617041+00:00",
            "created_at": "2026-02-11T16:59:42+00:00",
            "hf_updated_at": null,
            "name": "Z.ai: GLM 5",
            "short_name": "GLM 5",
            "author": "z-ai",
            "description": "GLM-5 is Z.ai’s flagship open-source foundation model engineered for complex systems design and long-horizon agent workflows. Built for expert developers, it delivers production-grade performance on large-scale programming tasks, rivaling leading closed-source models. With advanced agentic planning, deep backend reasoning, and iterative self-correction, GLM-5 moves beyond code generation to full-system construction and autonomous execution.",
            "model_version_group_id": null,
            "context_length": 202752,
            "input_modalities": [
              "text"
            ],
            "output_modalities": [
              "text"
            ],
            "has_text_output": true,
            "group": "Other",
            "instruct_type": null,
            "default_system": null,
            "default_stops": [],
            "hidden": false,
            "router": null,
            "warning_message": "",
            "promotion_message": "",
            "routing_error_message": "",
            "permaslug": "z-ai/glm-5-20260211",
            "supports_reasoning": true,
            "reasoning_config": {
              "start_token": "\u003Cthink\u003E",
              "end_token": "\u003C/think\u003E",
              "default_reasoning_enabled": true,
              "reasoning_return_mechanism": "reasoning-content"
            },
            "features": {
              "reasoning_config": {
                "start_token": "\u003Cthink\u003E",
                "end_token": "\u003C/think\u003E",
                "default_reasoning_enabled": true,
                "reasoning_return_mechanism": "reasoning-content"
              },
              "chat_template_config": {

              }
            },
            "default_parameters": {
              "temperature": 1,
              "top_p": 0.95,
              "frequency_penalty": null
            },
            "default_order": [],
            "quick_start_example_type": "reasoning",
            "is_trainable_text": null,
            "is_trainable_image": null
          },
          "model_variant_slug": "z-ai/glm-5",
          "model_variant_permaslug": "z-ai/glm-5-20260211",
          "adapter_name": "AmbientAdapter",
          "provider_name": "Ambient",
          "provider_info": {
            "name": "Ambient",
            "displayName": "Ambient",
            "slug": "ambient",
            "baseUrl": "https://api.ambient.xyz/v1",
            "dataPolicy": {
              "training": false,
              "trainingOpenRouter": false,
              "retainsPrompts": true,
              "canPublish": false
            },
            "datacenters": [],
            "regionOverrides": {

            },
            "hasChatCompletions": true,
            "hasCompletions": true,
            "isAbortable": true,
            "moderationRequired": false,
            "editors": [],
            "owners": [
              "org_38tjIOWJWZx8DLy4eBFPZOj8iQe"
            ],
            "adapterName": "AmbientAdapter",
            "statusPageUrl": null,
            "byokEnabled": false,
            "icon": {
              "url": "https://t0.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://ambient.xyz/&size=256"
            },
            "ignoredProviderModels": [],
            "sendClientIp": false,
            "pricingStrategy": "openai_chat_completions"
          },
          "provider_display_name": "Ambient",
          "provider_slug": "ambient/fp8",
          "provider_model_id": "zai-org/GLM-5-FP8",
          "quantization": "fp8",
          "variant": "standard",
          "is_free": false,
          "can_abort": true,
          "max_prompt_tokens": null,
          "max_completion_tokens": 131072,
          "max_tokens_per_image": null,
          "supported_parameters": [
            "reasoning",
            "include_reasoning",
            "temperature",
            "max_tokens",
            "top_p",
            "frequency_penalty"
          ],
          "is_byok": false,
          "moderation_required": false,
          "data_policy": {
            "training": false,
            "trainingOpenRouter": false,
            "retainsPrompts": true,
            "canPublish": false
          },
          "pricing": {
            "prompt": "0.00000072",
            "completion": "0.0000023",
            "discount": 0,
            "line_items": []
          },
          "variable_pricings": [],
          "line_items": [],
          "pricing_json": {
            "openai:prompt_tokens": "0.00000072",
            "openai:completion_tokens": "0.0000023"
          },
          "pricing_version_id": "fefe5f94-7a59-4456-8ef9-869ca9f8ab8f",
          "is_hidden": false,
          "is_deranked": false,
          "is_disabled": false,
          "supports_tool_parameters": false,
          "supports_reasoning": true,
          "supports_multipart": true,
          "limit_rpm": null,
          "limit_rpd": null,
          "limit_rpm_cf": null,
          "has_completions": true,
          "has_chat_completions": true,
          "features": {
            "supports_tool_choice": {
              "literal_none": true,
              "literal_auto": true,
              "literal_required": true,
              "type_function": true
            }
          },
          "provider_region": null,
          "deprecation_date": null
        }
      }
 */
export interface Model {
  slug: string;
  hf_slug: string;
  updated_at: string;
  created_at: string;
  hf_updated_at: any;
  name: string;
  short_name: string;
  author: string;
  description: string;
  model_version_group_id: any;
  context_length: number;
  input_modalities: Array<string>;
  output_modalities: Array<string>;
  has_text_output: boolean;
  group: string;
  instruct_type: any;
  default_system: any;
  default_stops: Array<any>;
  hidden: boolean;
  router: any;
  warning_message: string;
  promotion_message: string;
  routing_error_message: string;
  permaslug: string;
  supports_reasoning: boolean;
  reasoning_config: {
    start_token: string;
    end_token: string;
    default_reasoning_enabled: boolean;
    reasoning_return_mechanism: string;
  };
  features: {
    reasoning_config: {
      start_token: string;
      end_token: string;
      default_reasoning_enabled: boolean;
      reasoning_return_mechanism: string;
    };
    chat_template_config: {};
  };
  default_parameters: {
    temperature: number;
    top_p: number;
    frequency_penalty: any;
  };
  default_order: Array<any>;
  quick_start_example_type: string;
  is_trainable_text: any;
  is_trainable_image: any;
  endpoint: {
    id: string;
    name: string;
    context_length: number;
    model: {
      slug: string;
      hf_slug: string;
      updated_at: string;
      created_at: string;
      hf_updated_at: any;
      name: string;
      short_name: string;
      author: string;
      description: string;
      model_version_group_id: any;
      context_length: number;
      input_modalities: Array<string>;
      output_modalities: Array<string>;
      has_text_output: boolean;
      group: string;
      instruct_type: any;
      default_system: any;
      default_stops: Array<any>;
      hidden: boolean;
      router: any;
      warning_message: string;
      promotion_message: string;
      routing_error_message: string;
      permaslug: string;
      supports_reasoning: boolean;
      reasoning_config: {
        start_token: string;
        end_token: string;
        default_reasoning_enabled: boolean;
        reasoning_return_mechanism: string;
      };
      features: {
        reasoning_config: {
          start_token: string;
          end_token: string;
          default_reasoning_enabled: boolean;
          reasoning_return_mechanism: string;
        };
        chat_template_config: {};
      };
      default_parameters: {
        temperature: number;
        top_p: number;
        frequency_penalty: any;
      };
      default_order: Array<any>;
      quick_start_example_type: string;
      is_trainable_text: any;
      is_trainable_image: any;
    };
    model_variant_slug: string;
    model_variant_permaslug: string;
    adapter_name: string;
    provider_name: string;
    provider_info: {
      name: string;
      displayName: string;
      slug: string;
      baseUrl: string;
      dataPolicy: {
        training: boolean;
        trainingOpenRouter: boolean;
        retainsPrompts: boolean;
        canPublish: boolean;
      };
      datacenters: Array<any>;
      regionOverrides: {};
      hasChatCompletions: boolean;
      hasCompletions: boolean;
      isAbortable: boolean;
      moderationRequired: boolean;
      editors: Array<any>;
      owners: Array<string>;
      adapterName: string;
      statusPageUrl: any;
      byokEnabled: boolean;
      icon: {
        url: string;
      };
      ignoredProviderModels: Array<any>;
      sendClientIp: boolean;
      pricingStrategy: string;
    };
    provider_display_name: string;
    provider_slug: string;
    provider_model_id: string;
    quantization: string;
    variant: string;
    is_free: boolean;
    can_abort: boolean;
    max_prompt_tokens: any;
    max_completion_tokens: number;
    max_tokens_per_image: any;
    supported_parameters: Array<string>;
    is_byok: boolean;
    moderation_required: boolean;
    data_policy: {
      training: boolean;
      trainingOpenRouter: boolean;
      retainsPrompts: boolean;
      canPublish: boolean;
    };
    pricing: {
      prompt: string;
      completion: string;
      discount: number;
      line_items: Array<any>;
    };
    variable_pricings: Array<any>;
    line_items: Array<any>;
    pricing_json: {
      "openai:prompt_tokens": string;
      "openai:completion_tokens": string;
    };
    pricing_version_id: string;
    is_hidden: boolean;
    is_deranked: boolean;
    is_disabled: boolean;
    supports_tool_parameters: boolean;
    supports_reasoning: boolean;
    supports_multipart: boolean;
    limit_rpm: any;
    limit_rpd: any;
    limit_rpm_cf: any;
    has_completions: boolean;
    has_chat_completions: boolean;
    features: {
      supports_tool_choice: {
        literal_none: boolean;
        literal_auto: boolean;
        literal_required: boolean;
        type_function: boolean;
      };
    };
    provider_region: any;
    deprecation_date: any;
  };
}

export interface Analytic {
  date: string;
  model_permaslug: string;
  variant: string;
  variant_permaslug: string;
  count: number;
  total_completion_tokens: number;
  total_prompt_tokens: number;
  total_native_tokens_reasoning: number;
  num_media_prompt: number;
  num_media_completion: number;
  num_audio_prompt: number;
  total_native_tokens_cached: number;
  total_tool_calls: number;
  requests_with_tool_call_errors: number;
}

export interface Category {
  date: string;
  model: string;
  category: string;
  count: number;
  total_prompt_tokens: number;
  total_completion_tokens: number;
  volume: number;
  rank: number;
}

export interface Resp {
  data: {
    models: Array<Model>;
    analytics: {
      [key: string]: Analytic;
    };
    categories: {
      [key: string]: Array<Category>;
    };
  };
}
