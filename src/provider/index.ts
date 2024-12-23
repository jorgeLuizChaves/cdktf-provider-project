// https://registry.terraform.io/providers/confluentinc/confluent/2.9.0/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ConfluentProviderConfig {
  /**
  * The Confluent Cloud API Key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/confluentinc/confluent/2.9.0/docs#cloud_api_key ConfluentProvider#cloud_api_key}
  */
  readonly cloudApiKey?: string;
  /**
  * The Confluent Cloud API Secret.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/confluentinc/confluent/2.9.0/docs#cloud_api_secret ConfluentProvider#cloud_api_secret}
  */
  readonly cloudApiSecret?: string;
  /**
  * The base endpoint of Confluent Cloud API. Defaults to `https://api.confluent.cloud`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/confluentinc/confluent/2.9.0/docs#endpoint ConfluentProvider#endpoint}
  */
  readonly endpoint?: string;
  /**
  * The Flink Environment ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/confluentinc/confluent/2.9.0/docs#environment_id ConfluentProvider#environment_id}
  */
  readonly environmentId?: string;
  /**
  * The Flink API Key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/confluentinc/confluent/2.9.0/docs#flink_api_key ConfluentProvider#flink_api_key}
  */
  readonly flinkApiKey?: string;
  /**
  * The Flink API Secret.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/confluentinc/confluent/2.9.0/docs#flink_api_secret ConfluentProvider#flink_api_secret}
  */
  readonly flinkApiSecret?: string;
  /**
  * The Flink Compute Pool ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/confluentinc/confluent/2.9.0/docs#flink_compute_pool_id ConfluentProvider#flink_compute_pool_id}
  */
  readonly flinkComputePoolId?: string;
  /**
  * The Flink Principal ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/confluentinc/confluent/2.9.0/docs#flink_principal_id ConfluentProvider#flink_principal_id}
  */
  readonly flinkPrincipalId?: string;
  /**
  * The Flink REST Endpoint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/confluentinc/confluent/2.9.0/docs#flink_rest_endpoint ConfluentProvider#flink_rest_endpoint}
  */
  readonly flinkRestEndpoint?: string;
  /**
  * The Kafka Cluster API Key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/confluentinc/confluent/2.9.0/docs#kafka_api_key ConfluentProvider#kafka_api_key}
  */
  readonly kafkaApiKey?: string;
  /**
  * The Kafka Cluster API Secret.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/confluentinc/confluent/2.9.0/docs#kafka_api_secret ConfluentProvider#kafka_api_secret}
  */
  readonly kafkaApiSecret?: string;
  /**
  * The Kafka Cluster ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/confluentinc/confluent/2.9.0/docs#kafka_id ConfluentProvider#kafka_id}
  */
  readonly kafkaId?: string;
  /**
  * The Kafka Cluster REST Endpoint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/confluentinc/confluent/2.9.0/docs#kafka_rest_endpoint ConfluentProvider#kafka_rest_endpoint}
  */
  readonly kafkaRestEndpoint?: string;
  /**
  * Maximum number of retries of HTTP client. Defaults to 4.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/confluentinc/confluent/2.9.0/docs#max_retries ConfluentProvider#max_retries}
  */
  readonly maxRetries?: number;
  /**
  * The Flink Organization ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/confluentinc/confluent/2.9.0/docs#organization_id ConfluentProvider#organization_id}
  */
  readonly organizationId?: string;
  /**
  * The Schema Registry Cluster API Key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/confluentinc/confluent/2.9.0/docs#schema_registry_api_key ConfluentProvider#schema_registry_api_key}
  */
  readonly schemaRegistryApiKey?: string;
  /**
  * The Schema Registry Cluster API Secret.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/confluentinc/confluent/2.9.0/docs#schema_registry_api_secret ConfluentProvider#schema_registry_api_secret}
  */
  readonly schemaRegistryApiSecret?: string;
  /**
  * The Schema Registry Cluster ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/confluentinc/confluent/2.9.0/docs#schema_registry_id ConfluentProvider#schema_registry_id}
  */
  readonly schemaRegistryId?: string;
  /**
  * The Schema Registry Cluster REST Endpoint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/confluentinc/confluent/2.9.0/docs#schema_registry_rest_endpoint ConfluentProvider#schema_registry_rest_endpoint}
  */
  readonly schemaRegistryRestEndpoint?: string;
  /**
  * Alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/confluentinc/confluent/2.9.0/docs#alias ConfluentProvider#alias}
  */
  readonly alias?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/confluentinc/confluent/2.9.0/docs confluent}
*/
export class ConfluentProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "confluent";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ConfluentProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ConfluentProvider to import
  * @param importFromId The id of the existing ConfluentProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/confluentinc/confluent/2.9.0/docs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ConfluentProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "confluent", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/confluentinc/confluent/2.9.0/docs confluent} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ConfluentProviderConfig = {}
  */
  public constructor(scope: Construct, id: string, config: ConfluentProviderConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'confluent',
      terraformGeneratorMetadata: {
        providerName: 'confluent',
        providerVersion: '2.9.0',
        providerVersionConstraint: '~> 2.9.0'
      },
      terraformProviderSource: 'confluentinc/confluent'
    });
    this._cloudApiKey = config.cloudApiKey;
    this._cloudApiSecret = config.cloudApiSecret;
    this._endpoint = config.endpoint;
    this._environmentId = config.environmentId;
    this._flinkApiKey = config.flinkApiKey;
    this._flinkApiSecret = config.flinkApiSecret;
    this._flinkComputePoolId = config.flinkComputePoolId;
    this._flinkPrincipalId = config.flinkPrincipalId;
    this._flinkRestEndpoint = config.flinkRestEndpoint;
    this._kafkaApiKey = config.kafkaApiKey;
    this._kafkaApiSecret = config.kafkaApiSecret;
    this._kafkaId = config.kafkaId;
    this._kafkaRestEndpoint = config.kafkaRestEndpoint;
    this._maxRetries = config.maxRetries;
    this._organizationId = config.organizationId;
    this._schemaRegistryApiKey = config.schemaRegistryApiKey;
    this._schemaRegistryApiSecret = config.schemaRegistryApiSecret;
    this._schemaRegistryId = config.schemaRegistryId;
    this._schemaRegistryRestEndpoint = config.schemaRegistryRestEndpoint;
    this._alias = config.alias;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cloud_api_key - computed: false, optional: true, required: false
  private _cloudApiKey?: string; 
  public get cloudApiKey() {
    return this._cloudApiKey;
  }
  public set cloudApiKey(value: string | undefined) {
    this._cloudApiKey = value;
  }
  public resetCloudApiKey() {
    this._cloudApiKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudApiKeyInput() {
    return this._cloudApiKey;
  }

  // cloud_api_secret - computed: false, optional: true, required: false
  private _cloudApiSecret?: string; 
  public get cloudApiSecret() {
    return this._cloudApiSecret;
  }
  public set cloudApiSecret(value: string | undefined) {
    this._cloudApiSecret = value;
  }
  public resetCloudApiSecret() {
    this._cloudApiSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudApiSecretInput() {
    return this._cloudApiSecret;
  }

  // endpoint - computed: false, optional: true, required: false
  private _endpoint?: string; 
  public get endpoint() {
    return this._endpoint;
  }
  public set endpoint(value: string | undefined) {
    this._endpoint = value;
  }
  public resetEndpoint() {
    this._endpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointInput() {
    return this._endpoint;
  }

  // environment_id - computed: false, optional: true, required: false
  private _environmentId?: string; 
  public get environmentId() {
    return this._environmentId;
  }
  public set environmentId(value: string | undefined) {
    this._environmentId = value;
  }
  public resetEnvironmentId() {
    this._environmentId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentIdInput() {
    return this._environmentId;
  }

  // flink_api_key - computed: false, optional: true, required: false
  private _flinkApiKey?: string; 
  public get flinkApiKey() {
    return this._flinkApiKey;
  }
  public set flinkApiKey(value: string | undefined) {
    this._flinkApiKey = value;
  }
  public resetFlinkApiKey() {
    this._flinkApiKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get flinkApiKeyInput() {
    return this._flinkApiKey;
  }

  // flink_api_secret - computed: false, optional: true, required: false
  private _flinkApiSecret?: string; 
  public get flinkApiSecret() {
    return this._flinkApiSecret;
  }
  public set flinkApiSecret(value: string | undefined) {
    this._flinkApiSecret = value;
  }
  public resetFlinkApiSecret() {
    this._flinkApiSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get flinkApiSecretInput() {
    return this._flinkApiSecret;
  }

  // flink_compute_pool_id - computed: false, optional: true, required: false
  private _flinkComputePoolId?: string; 
  public get flinkComputePoolId() {
    return this._flinkComputePoolId;
  }
  public set flinkComputePoolId(value: string | undefined) {
    this._flinkComputePoolId = value;
  }
  public resetFlinkComputePoolId() {
    this._flinkComputePoolId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get flinkComputePoolIdInput() {
    return this._flinkComputePoolId;
  }

  // flink_principal_id - computed: false, optional: true, required: false
  private _flinkPrincipalId?: string; 
  public get flinkPrincipalId() {
    return this._flinkPrincipalId;
  }
  public set flinkPrincipalId(value: string | undefined) {
    this._flinkPrincipalId = value;
  }
  public resetFlinkPrincipalId() {
    this._flinkPrincipalId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get flinkPrincipalIdInput() {
    return this._flinkPrincipalId;
  }

  // flink_rest_endpoint - computed: false, optional: true, required: false
  private _flinkRestEndpoint?: string; 
  public get flinkRestEndpoint() {
    return this._flinkRestEndpoint;
  }
  public set flinkRestEndpoint(value: string | undefined) {
    this._flinkRestEndpoint = value;
  }
  public resetFlinkRestEndpoint() {
    this._flinkRestEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get flinkRestEndpointInput() {
    return this._flinkRestEndpoint;
  }

  // kafka_api_key - computed: false, optional: true, required: false
  private _kafkaApiKey?: string; 
  public get kafkaApiKey() {
    return this._kafkaApiKey;
  }
  public set kafkaApiKey(value: string | undefined) {
    this._kafkaApiKey = value;
  }
  public resetKafkaApiKey() {
    this._kafkaApiKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kafkaApiKeyInput() {
    return this._kafkaApiKey;
  }

  // kafka_api_secret - computed: false, optional: true, required: false
  private _kafkaApiSecret?: string; 
  public get kafkaApiSecret() {
    return this._kafkaApiSecret;
  }
  public set kafkaApiSecret(value: string | undefined) {
    this._kafkaApiSecret = value;
  }
  public resetKafkaApiSecret() {
    this._kafkaApiSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kafkaApiSecretInput() {
    return this._kafkaApiSecret;
  }

  // kafka_id - computed: false, optional: true, required: false
  private _kafkaId?: string; 
  public get kafkaId() {
    return this._kafkaId;
  }
  public set kafkaId(value: string | undefined) {
    this._kafkaId = value;
  }
  public resetKafkaId() {
    this._kafkaId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kafkaIdInput() {
    return this._kafkaId;
  }

  // kafka_rest_endpoint - computed: false, optional: true, required: false
  private _kafkaRestEndpoint?: string; 
  public get kafkaRestEndpoint() {
    return this._kafkaRestEndpoint;
  }
  public set kafkaRestEndpoint(value: string | undefined) {
    this._kafkaRestEndpoint = value;
  }
  public resetKafkaRestEndpoint() {
    this._kafkaRestEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kafkaRestEndpointInput() {
    return this._kafkaRestEndpoint;
  }

  // max_retries - computed: false, optional: true, required: false
  private _maxRetries?: number; 
  public get maxRetries() {
    return this._maxRetries;
  }
  public set maxRetries(value: number | undefined) {
    this._maxRetries = value;
  }
  public resetMaxRetries() {
    this._maxRetries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxRetriesInput() {
    return this._maxRetries;
  }

  // organization_id - computed: false, optional: true, required: false
  private _organizationId?: string; 
  public get organizationId() {
    return this._organizationId;
  }
  public set organizationId(value: string | undefined) {
    this._organizationId = value;
  }
  public resetOrganizationId() {
    this._organizationId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationIdInput() {
    return this._organizationId;
  }

  // schema_registry_api_key - computed: false, optional: true, required: false
  private _schemaRegistryApiKey?: string; 
  public get schemaRegistryApiKey() {
    return this._schemaRegistryApiKey;
  }
  public set schemaRegistryApiKey(value: string | undefined) {
    this._schemaRegistryApiKey = value;
  }
  public resetSchemaRegistryApiKey() {
    this._schemaRegistryApiKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaRegistryApiKeyInput() {
    return this._schemaRegistryApiKey;
  }

  // schema_registry_api_secret - computed: false, optional: true, required: false
  private _schemaRegistryApiSecret?: string; 
  public get schemaRegistryApiSecret() {
    return this._schemaRegistryApiSecret;
  }
  public set schemaRegistryApiSecret(value: string | undefined) {
    this._schemaRegistryApiSecret = value;
  }
  public resetSchemaRegistryApiSecret() {
    this._schemaRegistryApiSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaRegistryApiSecretInput() {
    return this._schemaRegistryApiSecret;
  }

  // schema_registry_id - computed: false, optional: true, required: false
  private _schemaRegistryId?: string; 
  public get schemaRegistryId() {
    return this._schemaRegistryId;
  }
  public set schemaRegistryId(value: string | undefined) {
    this._schemaRegistryId = value;
  }
  public resetSchemaRegistryId() {
    this._schemaRegistryId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaRegistryIdInput() {
    return this._schemaRegistryId;
  }

  // schema_registry_rest_endpoint - computed: false, optional: true, required: false
  private _schemaRegistryRestEndpoint?: string; 
  public get schemaRegistryRestEndpoint() {
    return this._schemaRegistryRestEndpoint;
  }
  public set schemaRegistryRestEndpoint(value: string | undefined) {
    this._schemaRegistryRestEndpoint = value;
  }
  public resetSchemaRegistryRestEndpoint() {
    this._schemaRegistryRestEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaRegistryRestEndpointInput() {
    return this._schemaRegistryRestEndpoint;
  }

  // alias - computed: false, optional: true, required: false
  private _alias?: string; 
  public get alias() {
    return this._alias;
  }
  public set alias(value: string | undefined) {
    this._alias = value;
  }
  public resetAlias() {
    this._alias = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aliasInput() {
    return this._alias;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cloud_api_key: cdktf.stringToTerraform(this._cloudApiKey),
      cloud_api_secret: cdktf.stringToTerraform(this._cloudApiSecret),
      endpoint: cdktf.stringToTerraform(this._endpoint),
      environment_id: cdktf.stringToTerraform(this._environmentId),
      flink_api_key: cdktf.stringToTerraform(this._flinkApiKey),
      flink_api_secret: cdktf.stringToTerraform(this._flinkApiSecret),
      flink_compute_pool_id: cdktf.stringToTerraform(this._flinkComputePoolId),
      flink_principal_id: cdktf.stringToTerraform(this._flinkPrincipalId),
      flink_rest_endpoint: cdktf.stringToTerraform(this._flinkRestEndpoint),
      kafka_api_key: cdktf.stringToTerraform(this._kafkaApiKey),
      kafka_api_secret: cdktf.stringToTerraform(this._kafkaApiSecret),
      kafka_id: cdktf.stringToTerraform(this._kafkaId),
      kafka_rest_endpoint: cdktf.stringToTerraform(this._kafkaRestEndpoint),
      max_retries: cdktf.numberToTerraform(this._maxRetries),
      organization_id: cdktf.stringToTerraform(this._organizationId),
      schema_registry_api_key: cdktf.stringToTerraform(this._schemaRegistryApiKey),
      schema_registry_api_secret: cdktf.stringToTerraform(this._schemaRegistryApiSecret),
      schema_registry_id: cdktf.stringToTerraform(this._schemaRegistryId),
      schema_registry_rest_endpoint: cdktf.stringToTerraform(this._schemaRegistryRestEndpoint),
      alias: cdktf.stringToTerraform(this._alias),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cloud_api_key: {
        value: cdktf.stringToHclTerraform(this._cloudApiKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cloud_api_secret: {
        value: cdktf.stringToHclTerraform(this._cloudApiSecret),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      endpoint: {
        value: cdktf.stringToHclTerraform(this._endpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      environment_id: {
        value: cdktf.stringToHclTerraform(this._environmentId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      flink_api_key: {
        value: cdktf.stringToHclTerraform(this._flinkApiKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      flink_api_secret: {
        value: cdktf.stringToHclTerraform(this._flinkApiSecret),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      flink_compute_pool_id: {
        value: cdktf.stringToHclTerraform(this._flinkComputePoolId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      flink_principal_id: {
        value: cdktf.stringToHclTerraform(this._flinkPrincipalId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      flink_rest_endpoint: {
        value: cdktf.stringToHclTerraform(this._flinkRestEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      kafka_api_key: {
        value: cdktf.stringToHclTerraform(this._kafkaApiKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      kafka_api_secret: {
        value: cdktf.stringToHclTerraform(this._kafkaApiSecret),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      kafka_id: {
        value: cdktf.stringToHclTerraform(this._kafkaId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      kafka_rest_endpoint: {
        value: cdktf.stringToHclTerraform(this._kafkaRestEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      max_retries: {
        value: cdktf.numberToHclTerraform(this._maxRetries),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      organization_id: {
        value: cdktf.stringToHclTerraform(this._organizationId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      schema_registry_api_key: {
        value: cdktf.stringToHclTerraform(this._schemaRegistryApiKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      schema_registry_api_secret: {
        value: cdktf.stringToHclTerraform(this._schemaRegistryApiSecret),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      schema_registry_id: {
        value: cdktf.stringToHclTerraform(this._schemaRegistryId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      schema_registry_rest_endpoint: {
        value: cdktf.stringToHclTerraform(this._schemaRegistryRestEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      alias: {
        value: cdktf.stringToHclTerraform(this._alias),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
