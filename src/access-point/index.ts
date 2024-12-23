// https://registry.terraform.io/providers/confluentinc/confluent/2.9.0/docs/resources/access_point
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AccessPointConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/confluentinc/confluent/2.9.0/docs/resources/access_point#display_name AccessPoint#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/confluentinc/confluent/2.9.0/docs/resources/access_point#id AccessPoint#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * aws_egress_private_link_endpoint block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/confluentinc/confluent/2.9.0/docs/resources/access_point#aws_egress_private_link_endpoint AccessPoint#aws_egress_private_link_endpoint}
  */
  readonly awsEgressPrivateLinkEndpoint?: AccessPointAwsEgressPrivateLinkEndpoint;
  /**
  * azure_egress_private_link_endpoint block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/confluentinc/confluent/2.9.0/docs/resources/access_point#azure_egress_private_link_endpoint AccessPoint#azure_egress_private_link_endpoint}
  */
  readonly azureEgressPrivateLinkEndpoint?: AccessPointAzureEgressPrivateLinkEndpoint;
  /**
  * environment block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/confluentinc/confluent/2.9.0/docs/resources/access_point#environment AccessPoint#environment}
  */
  readonly environment: AccessPointEnvironment;
  /**
  * gateway block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/confluentinc/confluent/2.9.0/docs/resources/access_point#gateway AccessPoint#gateway}
  */
  readonly gateway: AccessPointGateway;
}
export interface AccessPointAwsEgressPrivateLinkEndpoint {
  /**
  * Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/confluentinc/confluent/2.9.0/docs/resources/access_point#enable_high_availability AccessPoint#enable_high_availability}
  */
  readonly enableHighAvailability?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/confluentinc/confluent/2.9.0/docs/resources/access_point#vpc_endpoint_service_name AccessPoint#vpc_endpoint_service_name}
  */
  readonly vpcEndpointServiceName: string;
}

export function accessPointAwsEgressPrivateLinkEndpointToTerraform(struct?: AccessPointAwsEgressPrivateLinkEndpointOutputReference | AccessPointAwsEgressPrivateLinkEndpoint): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable_high_availability: cdktf.booleanToTerraform(struct!.enableHighAvailability),
    vpc_endpoint_service_name: cdktf.stringToTerraform(struct!.vpcEndpointServiceName),
  }
}


export function accessPointAwsEgressPrivateLinkEndpointToHclTerraform(struct?: AccessPointAwsEgressPrivateLinkEndpointOutputReference | AccessPointAwsEgressPrivateLinkEndpoint): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enable_high_availability: {
      value: cdktf.booleanToHclTerraform(struct!.enableHighAvailability),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    vpc_endpoint_service_name: {
      value: cdktf.stringToHclTerraform(struct!.vpcEndpointServiceName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AccessPointAwsEgressPrivateLinkEndpointOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AccessPointAwsEgressPrivateLinkEndpoint | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enableHighAvailability !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableHighAvailability = this._enableHighAvailability;
    }
    if (this._vpcEndpointServiceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.vpcEndpointServiceName = this._vpcEndpointServiceName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AccessPointAwsEgressPrivateLinkEndpoint | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enableHighAvailability = undefined;
      this._vpcEndpointServiceName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enableHighAvailability = value.enableHighAvailability;
      this._vpcEndpointServiceName = value.vpcEndpointServiceName;
    }
  }

  // enable_high_availability - computed: false, optional: true, required: false
  private _enableHighAvailability?: boolean | cdktf.IResolvable; 
  public get enableHighAvailability() {
    return this.getBooleanAttribute('enable_high_availability');
  }
  public set enableHighAvailability(value: boolean | cdktf.IResolvable) {
    this._enableHighAvailability = value;
  }
  public resetEnableHighAvailability() {
    this._enableHighAvailability = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableHighAvailabilityInput() {
    return this._enableHighAvailability;
  }

  // vpc_endpoint_dns_name - computed: true, optional: false, required: false
  public get vpcEndpointDnsName() {
    return this.getStringAttribute('vpc_endpoint_dns_name');
  }

  // vpc_endpoint_id - computed: true, optional: false, required: false
  public get vpcEndpointId() {
    return this.getStringAttribute('vpc_endpoint_id');
  }

  // vpc_endpoint_service_name - computed: false, optional: false, required: true
  private _vpcEndpointServiceName?: string; 
  public get vpcEndpointServiceName() {
    return this.getStringAttribute('vpc_endpoint_service_name');
  }
  public set vpcEndpointServiceName(value: string) {
    this._vpcEndpointServiceName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcEndpointServiceNameInput() {
    return this._vpcEndpointServiceName;
  }
}
export interface AccessPointAzureEgressPrivateLinkEndpoint {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/confluentinc/confluent/2.9.0/docs/resources/access_point#private_link_service_resource_id AccessPoint#private_link_service_resource_id}
  */
  readonly privateLinkServiceResourceId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/confluentinc/confluent/2.9.0/docs/resources/access_point#private_link_subresource_name AccessPoint#private_link_subresource_name}
  */
  readonly privateLinkSubresourceName?: string;
}

export function accessPointAzureEgressPrivateLinkEndpointToTerraform(struct?: AccessPointAzureEgressPrivateLinkEndpointOutputReference | AccessPointAzureEgressPrivateLinkEndpoint): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    private_link_service_resource_id: cdktf.stringToTerraform(struct!.privateLinkServiceResourceId),
    private_link_subresource_name: cdktf.stringToTerraform(struct!.privateLinkSubresourceName),
  }
}


export function accessPointAzureEgressPrivateLinkEndpointToHclTerraform(struct?: AccessPointAzureEgressPrivateLinkEndpointOutputReference | AccessPointAzureEgressPrivateLinkEndpoint): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    private_link_service_resource_id: {
      value: cdktf.stringToHclTerraform(struct!.privateLinkServiceResourceId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    private_link_subresource_name: {
      value: cdktf.stringToHclTerraform(struct!.privateLinkSubresourceName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AccessPointAzureEgressPrivateLinkEndpointOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AccessPointAzureEgressPrivateLinkEndpoint | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._privateLinkServiceResourceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateLinkServiceResourceId = this._privateLinkServiceResourceId;
    }
    if (this._privateLinkSubresourceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateLinkSubresourceName = this._privateLinkSubresourceName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AccessPointAzureEgressPrivateLinkEndpoint | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._privateLinkServiceResourceId = undefined;
      this._privateLinkSubresourceName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._privateLinkServiceResourceId = value.privateLinkServiceResourceId;
      this._privateLinkSubresourceName = value.privateLinkSubresourceName;
    }
  }

  // private_endpoint_custom_dns_config_domains - computed: true, optional: false, required: false
  public get privateEndpointCustomDnsConfigDomains() {
    return this.getListAttribute('private_endpoint_custom_dns_config_domains');
  }

  // private_endpoint_domain - computed: true, optional: false, required: false
  public get privateEndpointDomain() {
    return this.getStringAttribute('private_endpoint_domain');
  }

  // private_endpoint_ip_address - computed: true, optional: false, required: false
  public get privateEndpointIpAddress() {
    return this.getStringAttribute('private_endpoint_ip_address');
  }

  // private_endpoint_resource_id - computed: true, optional: false, required: false
  public get privateEndpointResourceId() {
    return this.getStringAttribute('private_endpoint_resource_id');
  }

  // private_link_service_resource_id - computed: false, optional: false, required: true
  private _privateLinkServiceResourceId?: string; 
  public get privateLinkServiceResourceId() {
    return this.getStringAttribute('private_link_service_resource_id');
  }
  public set privateLinkServiceResourceId(value: string) {
    this._privateLinkServiceResourceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get privateLinkServiceResourceIdInput() {
    return this._privateLinkServiceResourceId;
  }

  // private_link_subresource_name - computed: false, optional: true, required: false
  private _privateLinkSubresourceName?: string; 
  public get privateLinkSubresourceName() {
    return this.getStringAttribute('private_link_subresource_name');
  }
  public set privateLinkSubresourceName(value: string) {
    this._privateLinkSubresourceName = value;
  }
  public resetPrivateLinkSubresourceName() {
    this._privateLinkSubresourceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateLinkSubresourceNameInput() {
    return this._privateLinkSubresourceName;
  }
}
export interface AccessPointEnvironment {
  /**
  * The unique identifier for the environment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/confluentinc/confluent/2.9.0/docs/resources/access_point#id AccessPoint#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}

export function accessPointEnvironmentToTerraform(struct?: AccessPointEnvironmentOutputReference | AccessPointEnvironment): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function accessPointEnvironmentToHclTerraform(struct?: AccessPointEnvironmentOutputReference | AccessPointEnvironment): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AccessPointEnvironmentOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AccessPointEnvironment | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AccessPointEnvironment | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._id = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._id = value.id;
    }
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }
}
export interface AccessPointGateway {
  /**
  * The unique identifier for the gateway.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/confluentinc/confluent/2.9.0/docs/resources/access_point#id AccessPoint#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}

export function accessPointGatewayToTerraform(struct?: AccessPointGatewayOutputReference | AccessPointGateway): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function accessPointGatewayToHclTerraform(struct?: AccessPointGatewayOutputReference | AccessPointGateway): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AccessPointGatewayOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AccessPointGateway | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AccessPointGateway | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._id = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._id = value.id;
    }
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/confluentinc/confluent/2.9.0/docs/resources/access_point confluent_access_point}
*/
export class AccessPoint extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "confluent_access_point";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AccessPoint resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AccessPoint to import
  * @param importFromId The id of the existing AccessPoint that should be imported. Refer to the {@link https://registry.terraform.io/providers/confluentinc/confluent/2.9.0/docs/resources/access_point#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AccessPoint to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "confluent_access_point", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/confluentinc/confluent/2.9.0/docs/resources/access_point confluent_access_point} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AccessPointConfig
  */
  public constructor(scope: Construct, id: string, config: AccessPointConfig) {
    super(scope, id, {
      terraformResourceType: 'confluent_access_point',
      terraformGeneratorMetadata: {
        providerName: 'confluent',
        providerVersion: '2.9.0',
        providerVersionConstraint: '~> 2.9.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._displayName = config.displayName;
    this._id = config.id;
    this._awsEgressPrivateLinkEndpoint.internalValue = config.awsEgressPrivateLinkEndpoint;
    this._azureEgressPrivateLinkEndpoint.internalValue = config.azureEgressPrivateLinkEndpoint;
    this._environment.internalValue = config.environment;
    this._gateway.internalValue = config.gateway;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // display_name - computed: true, optional: true, required: false
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  public resetDisplayName() {
    this._displayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // aws_egress_private_link_endpoint - computed: false, optional: true, required: false
  private _awsEgressPrivateLinkEndpoint = new AccessPointAwsEgressPrivateLinkEndpointOutputReference(this, "aws_egress_private_link_endpoint");
  public get awsEgressPrivateLinkEndpoint() {
    return this._awsEgressPrivateLinkEndpoint;
  }
  public putAwsEgressPrivateLinkEndpoint(value: AccessPointAwsEgressPrivateLinkEndpoint) {
    this._awsEgressPrivateLinkEndpoint.internalValue = value;
  }
  public resetAwsEgressPrivateLinkEndpoint() {
    this._awsEgressPrivateLinkEndpoint.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsEgressPrivateLinkEndpointInput() {
    return this._awsEgressPrivateLinkEndpoint.internalValue;
  }

  // azure_egress_private_link_endpoint - computed: false, optional: true, required: false
  private _azureEgressPrivateLinkEndpoint = new AccessPointAzureEgressPrivateLinkEndpointOutputReference(this, "azure_egress_private_link_endpoint");
  public get azureEgressPrivateLinkEndpoint() {
    return this._azureEgressPrivateLinkEndpoint;
  }
  public putAzureEgressPrivateLinkEndpoint(value: AccessPointAzureEgressPrivateLinkEndpoint) {
    this._azureEgressPrivateLinkEndpoint.internalValue = value;
  }
  public resetAzureEgressPrivateLinkEndpoint() {
    this._azureEgressPrivateLinkEndpoint.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureEgressPrivateLinkEndpointInput() {
    return this._azureEgressPrivateLinkEndpoint.internalValue;
  }

  // environment - computed: false, optional: false, required: true
  private _environment = new AccessPointEnvironmentOutputReference(this, "environment");
  public get environment() {
    return this._environment;
  }
  public putEnvironment(value: AccessPointEnvironment) {
    this._environment.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentInput() {
    return this._environment.internalValue;
  }

  // gateway - computed: false, optional: false, required: true
  private _gateway = new AccessPointGatewayOutputReference(this, "gateway");
  public get gateway() {
    return this._gateway;
  }
  public putGateway(value: AccessPointGateway) {
    this._gateway.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewayInput() {
    return this._gateway.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      display_name: cdktf.stringToTerraform(this._displayName),
      id: cdktf.stringToTerraform(this._id),
      aws_egress_private_link_endpoint: accessPointAwsEgressPrivateLinkEndpointToTerraform(this._awsEgressPrivateLinkEndpoint.internalValue),
      azure_egress_private_link_endpoint: accessPointAzureEgressPrivateLinkEndpointToTerraform(this._azureEgressPrivateLinkEndpoint.internalValue),
      environment: accessPointEnvironmentToTerraform(this._environment.internalValue),
      gateway: accessPointGatewayToTerraform(this._gateway.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      display_name: {
        value: cdktf.stringToHclTerraform(this._displayName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      aws_egress_private_link_endpoint: {
        value: accessPointAwsEgressPrivateLinkEndpointToHclTerraform(this._awsEgressPrivateLinkEndpoint.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AccessPointAwsEgressPrivateLinkEndpointList",
      },
      azure_egress_private_link_endpoint: {
        value: accessPointAzureEgressPrivateLinkEndpointToHclTerraform(this._azureEgressPrivateLinkEndpoint.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AccessPointAzureEgressPrivateLinkEndpointList",
      },
      environment: {
        value: accessPointEnvironmentToHclTerraform(this._environment.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AccessPointEnvironmentList",
      },
      gateway: {
        value: accessPointGatewayToHclTerraform(this._gateway.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AccessPointGatewayList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
