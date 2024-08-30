// https://registry.terraform.io/providers/hashicorp/hcp/0.95.1/docs/resources/log_streaming_destination
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LogStreamingDestinationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.95.1/docs/resources/log_streaming_destination#cloudwatch LogStreamingDestination#cloudwatch}
  */
  readonly cloudwatch?: LogStreamingDestinationCloudwatch;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.95.1/docs/resources/log_streaming_destination#datadog LogStreamingDestination#datadog}
  */
  readonly datadog?: LogStreamingDestinationDatadog;
  /**
  * The HCP Log Streaming Destination’s name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.95.1/docs/resources/log_streaming_destination#name LogStreamingDestination#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.95.1/docs/resources/log_streaming_destination#splunk_cloud LogStreamingDestination#splunk_cloud}
  */
  readonly splunkCloud?: LogStreamingDestinationSplunkCloud;
}
export interface LogStreamingDestinationCloudwatch {
  /**
  * The external_id to provide when assuming the aws IAM role.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.95.1/docs/resources/log_streaming_destination#external_id LogStreamingDestination#external_id}
  */
  readonly externalId: string;
  /**
  * The log_group_name of the CloudWatch destination.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.95.1/docs/resources/log_streaming_destination#log_group_name LogStreamingDestination#log_group_name}
  */
  readonly logGroupName?: string;
  /**
  * The region the CloudWatch destination is set up to stream to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.95.1/docs/resources/log_streaming_destination#region LogStreamingDestination#region}
  */
  readonly region: string;
  /**
  * The role_arn that will be assumed to stream logs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.95.1/docs/resources/log_streaming_destination#role_arn LogStreamingDestination#role_arn}
  */
  readonly roleArn: string;
}

export function logStreamingDestinationCloudwatchToTerraform(struct?: LogStreamingDestinationCloudwatch | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    external_id: cdktf.stringToTerraform(struct!.externalId),
    log_group_name: cdktf.stringToTerraform(struct!.logGroupName),
    region: cdktf.stringToTerraform(struct!.region),
    role_arn: cdktf.stringToTerraform(struct!.roleArn),
  }
}


export function logStreamingDestinationCloudwatchToHclTerraform(struct?: LogStreamingDestinationCloudwatch | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    external_id: {
      value: cdktf.stringToHclTerraform(struct!.externalId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    log_group_name: {
      value: cdktf.stringToHclTerraform(struct!.logGroupName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    region: {
      value: cdktf.stringToHclTerraform(struct!.region),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    role_arn: {
      value: cdktf.stringToHclTerraform(struct!.roleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogStreamingDestinationCloudwatchOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LogStreamingDestinationCloudwatch | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._externalId !== undefined) {
      hasAnyValues = true;
      internalValueResult.externalId = this._externalId;
    }
    if (this._logGroupName !== undefined) {
      hasAnyValues = true;
      internalValueResult.logGroupName = this._logGroupName;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    if (this._roleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleArn = this._roleArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogStreamingDestinationCloudwatch | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._externalId = undefined;
      this._logGroupName = undefined;
      this._region = undefined;
      this._roleArn = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._externalId = value.externalId;
      this._logGroupName = value.logGroupName;
      this._region = value.region;
      this._roleArn = value.roleArn;
    }
  }

  // external_id - computed: false, optional: false, required: true
  private _externalId?: string; 
  public get externalId() {
    return this.getStringAttribute('external_id');
  }
  public set externalId(value: string) {
    this._externalId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get externalIdInput() {
    return this._externalId;
  }

  // log_group_name - computed: true, optional: true, required: false
  private _logGroupName?: string; 
  public get logGroupName() {
    return this.getStringAttribute('log_group_name');
  }
  public set logGroupName(value: string) {
    this._logGroupName = value;
  }
  public resetLogGroupName() {
    this._logGroupName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logGroupNameInput() {
    return this._logGroupName;
  }

  // region - computed: false, optional: false, required: true
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // role_arn - computed: false, optional: false, required: true
  private _roleArn?: string; 
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
  public set roleArn(value: string) {
    this._roleArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleArnInput() {
    return this._roleArn;
  }
}
export interface LogStreamingDestinationDatadog {
  /**
  * The value for the DD-API-KEY to send when making requests to DataDog.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.95.1/docs/resources/log_streaming_destination#api_key LogStreamingDestination#api_key}
  */
  readonly apiKey: string;
  /**
  * The value for the DD-APPLICATION-KEY to send when making requests to DataDog.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.95.1/docs/resources/log_streaming_destination#application_key LogStreamingDestination#application_key}
  */
  readonly applicationKey?: string;
  /**
  * The Datadog endpoint to send logs to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.95.1/docs/resources/log_streaming_destination#endpoint LogStreamingDestination#endpoint}
  */
  readonly endpoint: string;
}

export function logStreamingDestinationDatadogToTerraform(struct?: LogStreamingDestinationDatadog | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_key: cdktf.stringToTerraform(struct!.apiKey),
    application_key: cdktf.stringToTerraform(struct!.applicationKey),
    endpoint: cdktf.stringToTerraform(struct!.endpoint),
  }
}


export function logStreamingDestinationDatadogToHclTerraform(struct?: LogStreamingDestinationDatadog | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    api_key: {
      value: cdktf.stringToHclTerraform(struct!.apiKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    application_key: {
      value: cdktf.stringToHclTerraform(struct!.applicationKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    endpoint: {
      value: cdktf.stringToHclTerraform(struct!.endpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogStreamingDestinationDatadogOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LogStreamingDestinationDatadog | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiKey = this._apiKey;
    }
    if (this._applicationKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.applicationKey = this._applicationKey;
    }
    if (this._endpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.endpoint = this._endpoint;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogStreamingDestinationDatadog | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apiKey = undefined;
      this._applicationKey = undefined;
      this._endpoint = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._apiKey = value.apiKey;
      this._applicationKey = value.applicationKey;
      this._endpoint = value.endpoint;
    }
  }

  // api_key - computed: false, optional: false, required: true
  private _apiKey?: string; 
  public get apiKey() {
    return this.getStringAttribute('api_key');
  }
  public set apiKey(value: string) {
    this._apiKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get apiKeyInput() {
    return this._apiKey;
  }

  // application_key - computed: false, optional: true, required: false
  private _applicationKey?: string; 
  public get applicationKey() {
    return this.getStringAttribute('application_key');
  }
  public set applicationKey(value: string) {
    this._applicationKey = value;
  }
  public resetApplicationKey() {
    this._applicationKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationKeyInput() {
    return this._applicationKey;
  }

  // endpoint - computed: false, optional: false, required: true
  private _endpoint?: string; 
  public get endpoint() {
    return this.getStringAttribute('endpoint');
  }
  public set endpoint(value: string) {
    this._endpoint = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointInput() {
    return this._endpoint;
  }
}
export interface LogStreamingDestinationSplunkCloud {
  /**
  * The Splunk Cloud endpoint to send logs to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.95.1/docs/resources/log_streaming_destination#endpoint LogStreamingDestination#endpoint}
  */
  readonly endpoint: string;
  /**
  * The authentication token that will be used by the platform to access Splunk Cloud.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.95.1/docs/resources/log_streaming_destination#token LogStreamingDestination#token}
  */
  readonly token: string;
}

export function logStreamingDestinationSplunkCloudToTerraform(struct?: LogStreamingDestinationSplunkCloud | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    endpoint: cdktf.stringToTerraform(struct!.endpoint),
    token: cdktf.stringToTerraform(struct!.token),
  }
}


export function logStreamingDestinationSplunkCloudToHclTerraform(struct?: LogStreamingDestinationSplunkCloud | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    endpoint: {
      value: cdktf.stringToHclTerraform(struct!.endpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    token: {
      value: cdktf.stringToHclTerraform(struct!.token),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogStreamingDestinationSplunkCloudOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LogStreamingDestinationSplunkCloud | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._endpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.endpoint = this._endpoint;
    }
    if (this._token !== undefined) {
      hasAnyValues = true;
      internalValueResult.token = this._token;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogStreamingDestinationSplunkCloud | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._endpoint = undefined;
      this._token = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._endpoint = value.endpoint;
      this._token = value.token;
    }
  }

  // endpoint - computed: false, optional: false, required: true
  private _endpoint?: string; 
  public get endpoint() {
    return this.getStringAttribute('endpoint');
  }
  public set endpoint(value: string) {
    this._endpoint = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointInput() {
    return this._endpoint;
  }

  // token - computed: false, optional: false, required: true
  private _token?: string; 
  public get token() {
    return this.getStringAttribute('token');
  }
  public set token(value: string) {
    this._token = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenInput() {
    return this._token;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/hcp/0.95.1/docs/resources/log_streaming_destination hcp_log_streaming_destination}
*/
export class LogStreamingDestination extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "hcp_log_streaming_destination";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a LogStreamingDestination resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the LogStreamingDestination to import
  * @param importFromId The id of the existing LogStreamingDestination that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/hcp/0.95.1/docs/resources/log_streaming_destination#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the LogStreamingDestination to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "hcp_log_streaming_destination", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/hcp/0.95.1/docs/resources/log_streaming_destination hcp_log_streaming_destination} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LogStreamingDestinationConfig
  */
  public constructor(scope: Construct, id: string, config: LogStreamingDestinationConfig) {
    super(scope, id, {
      terraformResourceType: 'hcp_log_streaming_destination',
      terraformGeneratorMetadata: {
        providerName: 'hcp',
        providerVersion: '0.95.1',
        providerVersionConstraint: '~> 0.45'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._cloudwatch.internalValue = config.cloudwatch;
    this._datadog.internalValue = config.datadog;
    this._name = config.name;
    this._splunkCloud.internalValue = config.splunkCloud;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cloudwatch - computed: false, optional: true, required: false
  private _cloudwatch = new LogStreamingDestinationCloudwatchOutputReference(this, "cloudwatch");
  public get cloudwatch() {
    return this._cloudwatch;
  }
  public putCloudwatch(value: LogStreamingDestinationCloudwatch) {
    this._cloudwatch.internalValue = value;
  }
  public resetCloudwatch() {
    this._cloudwatch.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudwatchInput() {
    return this._cloudwatch.internalValue;
  }

  // datadog - computed: false, optional: true, required: false
  private _datadog = new LogStreamingDestinationDatadogOutputReference(this, "datadog");
  public get datadog() {
    return this._datadog;
  }
  public putDatadog(value: LogStreamingDestinationDatadog) {
    this._datadog.internalValue = value;
  }
  public resetDatadog() {
    this._datadog.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datadogInput() {
    return this._datadog.internalValue;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // splunk_cloud - computed: false, optional: true, required: false
  private _splunkCloud = new LogStreamingDestinationSplunkCloudOutputReference(this, "splunk_cloud");
  public get splunkCloud() {
    return this._splunkCloud;
  }
  public putSplunkCloud(value: LogStreamingDestinationSplunkCloud) {
    this._splunkCloud.internalValue = value;
  }
  public resetSplunkCloud() {
    this._splunkCloud.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get splunkCloudInput() {
    return this._splunkCloud.internalValue;
  }

  // streaming_destination_id - computed: true, optional: false, required: false
  public get streamingDestinationId() {
    return this.getStringAttribute('streaming_destination_id');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cloudwatch: logStreamingDestinationCloudwatchToTerraform(this._cloudwatch.internalValue),
      datadog: logStreamingDestinationDatadogToTerraform(this._datadog.internalValue),
      name: cdktf.stringToTerraform(this._name),
      splunk_cloud: logStreamingDestinationSplunkCloudToTerraform(this._splunkCloud.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cloudwatch: {
        value: logStreamingDestinationCloudwatchToHclTerraform(this._cloudwatch.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "LogStreamingDestinationCloudwatch",
      },
      datadog: {
        value: logStreamingDestinationDatadogToHclTerraform(this._datadog.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "LogStreamingDestinationDatadog",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      splunk_cloud: {
        value: logStreamingDestinationSplunkCloudToHclTerraform(this._splunkCloud.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "LogStreamingDestinationSplunkCloud",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
