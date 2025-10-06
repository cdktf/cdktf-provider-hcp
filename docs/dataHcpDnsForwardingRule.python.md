# `dataHcpDnsForwardingRule` Submodule <a name="`dataHcpDnsForwardingRule` Submodule" id="@cdktf/provider-hcp.dataHcpDnsForwardingRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataHcpDnsForwardingRule <a name="DataHcpDnsForwardingRule" id="@cdktf/provider-hcp.dataHcpDnsForwardingRule.DataHcpDnsForwardingRule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/hcp/0.110.0/docs/data-sources/dns_forwarding_rule hcp_dns_forwarding_rule}.

#### Initializers <a name="Initializers" id="@cdktf/provider-hcp.dataHcpDnsForwardingRule.DataHcpDnsForwardingRule.Initializer"></a>

```python
from cdktf_cdktf_provider_hcp import data_hcp_dns_forwarding_rule

dataHcpDnsForwardingRule.DataHcpDnsForwardingRule(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  dns_forwarding_id: str,
  dns_forwarding_rule_id: str,
  hvn_id: str,
  id: str = None,
  project_id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpDnsForwardingRule.DataHcpDnsForwardingRule.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-hcp.dataHcpDnsForwardingRule.DataHcpDnsForwardingRule.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-hcp.dataHcpDnsForwardingRule.DataHcpDnsForwardingRule.Initializer.parameter.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpDnsForwardingRule.DataHcpDnsForwardingRule.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpDnsForwardingRule.DataHcpDnsForwardingRule.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpDnsForwardingRule.DataHcpDnsForwardingRule.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpDnsForwardingRule.DataHcpDnsForwardingRule.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpDnsForwardingRule.DataHcpDnsForwardingRule.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpDnsForwardingRule.DataHcpDnsForwardingRule.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpDnsForwardingRule.DataHcpDnsForwardingRule.Initializer.parameter.dnsForwardingId">dns_forwarding_id</a></code> | <code>str</code> | The ID of the DNS forwarding configuration this rule belongs to. |
| <code><a href="#@cdktf/provider-hcp.dataHcpDnsForwardingRule.DataHcpDnsForwardingRule.Initializer.parameter.dnsForwardingRuleId">dns_forwarding_rule_id</a></code> | <code>str</code> | The ID of the DNS forwarding rule. |
| <code><a href="#@cdktf/provider-hcp.dataHcpDnsForwardingRule.DataHcpDnsForwardingRule.Initializer.parameter.hvnId">hvn_id</a></code> | <code>str</code> | The ID of the HVN that this DNS forwarding rule belongs to. |
| <code><a href="#@cdktf/provider-hcp.dataHcpDnsForwardingRule.DataHcpDnsForwardingRule.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.110.0/docs/data-sources/dns_forwarding_rule#id DataHcpDnsForwardingRule#id}. |
| <code><a href="#@cdktf/provider-hcp.dataHcpDnsForwardingRule.DataHcpDnsForwardingRule.Initializer.parameter.projectId">project_id</a></code> | <code>str</code> | The ID of the HCP project where the DNS forwarding rule is located. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-hcp.dataHcpDnsForwardingRule.DataHcpDnsForwardingRule.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-hcp.dataHcpDnsForwardingRule.DataHcpDnsForwardingRule.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-hcp.dataHcpDnsForwardingRule.DataHcpDnsForwardingRule.Initializer.parameter.connection"></a>

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-hcp.dataHcpDnsForwardingRule.DataHcpDnsForwardingRule.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-hcp.dataHcpDnsForwardingRule.DataHcpDnsForwardingRule.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-hcp.dataHcpDnsForwardingRule.DataHcpDnsForwardingRule.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-hcp.dataHcpDnsForwardingRule.DataHcpDnsForwardingRule.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-hcp.dataHcpDnsForwardingRule.DataHcpDnsForwardingRule.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-hcp.dataHcpDnsForwardingRule.DataHcpDnsForwardingRule.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `dns_forwarding_id`<sup>Required</sup> <a name="dns_forwarding_id" id="@cdktf/provider-hcp.dataHcpDnsForwardingRule.DataHcpDnsForwardingRule.Initializer.parameter.dnsForwardingId"></a>

- *Type:* str

The ID of the DNS forwarding configuration this rule belongs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.110.0/docs/data-sources/dns_forwarding_rule#dns_forwarding_id DataHcpDnsForwardingRule#dns_forwarding_id}

---

##### `dns_forwarding_rule_id`<sup>Required</sup> <a name="dns_forwarding_rule_id" id="@cdktf/provider-hcp.dataHcpDnsForwardingRule.DataHcpDnsForwardingRule.Initializer.parameter.dnsForwardingRuleId"></a>

- *Type:* str

The ID of the DNS forwarding rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.110.0/docs/data-sources/dns_forwarding_rule#dns_forwarding_rule_id DataHcpDnsForwardingRule#dns_forwarding_rule_id}

---

##### `hvn_id`<sup>Required</sup> <a name="hvn_id" id="@cdktf/provider-hcp.dataHcpDnsForwardingRule.DataHcpDnsForwardingRule.Initializer.parameter.hvnId"></a>

- *Type:* str

The ID of the HVN that this DNS forwarding rule belongs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.110.0/docs/data-sources/dns_forwarding_rule#hvn_id DataHcpDnsForwardingRule#hvn_id}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-hcp.dataHcpDnsForwardingRule.DataHcpDnsForwardingRule.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.110.0/docs/data-sources/dns_forwarding_rule#id DataHcpDnsForwardingRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project_id`<sup>Optional</sup> <a name="project_id" id="@cdktf/provider-hcp.dataHcpDnsForwardingRule.DataHcpDnsForwardingRule.Initializer.parameter.projectId"></a>

- *Type:* str

The ID of the HCP project where the DNS forwarding rule is located.

If not specified, the project specified in the HCP Provider config block will be used, if configured.
If a project is not configured in the HCP Provider config block, the oldest project in the organization will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.110.0/docs/data-sources/dns_forwarding_rule#project_id DataHcpDnsForwardingRule#project_id}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpDnsForwardingRule.DataHcpDnsForwardingRule.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-hcp.dataHcpDnsForwardingRule.DataHcpDnsForwardingRule.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpDnsForwardingRule.DataHcpDnsForwardingRule.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-hcp.dataHcpDnsForwardingRule.DataHcpDnsForwardingRule.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-hcp.dataHcpDnsForwardingRule.DataHcpDnsForwardingRule.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-hcp.dataHcpDnsForwardingRule.DataHcpDnsForwardingRule.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpDnsForwardingRule.DataHcpDnsForwardingRule.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-hcp.dataHcpDnsForwardingRule.DataHcpDnsForwardingRule.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpDnsForwardingRule.DataHcpDnsForwardingRule.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpDnsForwardingRule.DataHcpDnsForwardingRule.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpDnsForwardingRule.DataHcpDnsForwardingRule.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpDnsForwardingRule.DataHcpDnsForwardingRule.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpDnsForwardingRule.DataHcpDnsForwardingRule.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpDnsForwardingRule.DataHcpDnsForwardingRule.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpDnsForwardingRule.DataHcpDnsForwardingRule.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpDnsForwardingRule.DataHcpDnsForwardingRule.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpDnsForwardingRule.DataHcpDnsForwardingRule.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpDnsForwardingRule.DataHcpDnsForwardingRule.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpDnsForwardingRule.DataHcpDnsForwardingRule.resetProjectId">reset_project_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-hcp.dataHcpDnsForwardingRule.DataHcpDnsForwardingRule.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-hcp.dataHcpDnsForwardingRule.DataHcpDnsForwardingRule.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-hcp.dataHcpDnsForwardingRule.DataHcpDnsForwardingRule.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-hcp.dataHcpDnsForwardingRule.DataHcpDnsForwardingRule.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-hcp.dataHcpDnsForwardingRule.DataHcpDnsForwardingRule.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-hcp.dataHcpDnsForwardingRule.DataHcpDnsForwardingRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-hcp.dataHcpDnsForwardingRule.DataHcpDnsForwardingRule.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-hcp.dataHcpDnsForwardingRule.DataHcpDnsForwardingRule.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-hcp.dataHcpDnsForwardingRule.DataHcpDnsForwardingRule.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-hcp.dataHcpDnsForwardingRule.DataHcpDnsForwardingRule.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-hcp.dataHcpDnsForwardingRule.DataHcpDnsForwardingRule.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.dataHcpDnsForwardingRule.DataHcpDnsForwardingRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-hcp.dataHcpDnsForwardingRule.DataHcpDnsForwardingRule.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.dataHcpDnsForwardingRule.DataHcpDnsForwardingRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-hcp.dataHcpDnsForwardingRule.DataHcpDnsForwardingRule.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.dataHcpDnsForwardingRule.DataHcpDnsForwardingRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-hcp.dataHcpDnsForwardingRule.DataHcpDnsForwardingRule.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.dataHcpDnsForwardingRule.DataHcpDnsForwardingRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-hcp.dataHcpDnsForwardingRule.DataHcpDnsForwardingRule.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.dataHcpDnsForwardingRule.DataHcpDnsForwardingRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-hcp.dataHcpDnsForwardingRule.DataHcpDnsForwardingRule.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.dataHcpDnsForwardingRule.DataHcpDnsForwardingRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-hcp.dataHcpDnsForwardingRule.DataHcpDnsForwardingRule.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.dataHcpDnsForwardingRule.DataHcpDnsForwardingRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-hcp.dataHcpDnsForwardingRule.DataHcpDnsForwardingRule.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.dataHcpDnsForwardingRule.DataHcpDnsForwardingRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-hcp.dataHcpDnsForwardingRule.DataHcpDnsForwardingRule.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.dataHcpDnsForwardingRule.DataHcpDnsForwardingRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-hcp.dataHcpDnsForwardingRule.DataHcpDnsForwardingRule.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.dataHcpDnsForwardingRule.DataHcpDnsForwardingRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-hcp.dataHcpDnsForwardingRule.DataHcpDnsForwardingRule.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_project_id` <a name="reset_project_id" id="@cdktf/provider-hcp.dataHcpDnsForwardingRule.DataHcpDnsForwardingRule.resetProjectId"></a>

```python
def reset_project_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpDnsForwardingRule.DataHcpDnsForwardingRule.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-hcp.dataHcpDnsForwardingRule.DataHcpDnsForwardingRule.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpDnsForwardingRule.DataHcpDnsForwardingRule.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpDnsForwardingRule.DataHcpDnsForwardingRule.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataHcpDnsForwardingRule resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-hcp.dataHcpDnsForwardingRule.DataHcpDnsForwardingRule.isConstruct"></a>

```python
from cdktf_cdktf_provider_hcp import data_hcp_dns_forwarding_rule

dataHcpDnsForwardingRule.DataHcpDnsForwardingRule.is_construct(
  x: typing.Any
)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-hcp.dataHcpDnsForwardingRule.DataHcpDnsForwardingRule.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-hcp.dataHcpDnsForwardingRule.DataHcpDnsForwardingRule.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_hcp import data_hcp_dns_forwarding_rule

dataHcpDnsForwardingRule.DataHcpDnsForwardingRule.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-hcp.dataHcpDnsForwardingRule.DataHcpDnsForwardingRule.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-hcp.dataHcpDnsForwardingRule.DataHcpDnsForwardingRule.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_hcp import data_hcp_dns_forwarding_rule

dataHcpDnsForwardingRule.DataHcpDnsForwardingRule.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-hcp.dataHcpDnsForwardingRule.DataHcpDnsForwardingRule.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-hcp.dataHcpDnsForwardingRule.DataHcpDnsForwardingRule.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_hcp import data_hcp_dns_forwarding_rule

dataHcpDnsForwardingRule.DataHcpDnsForwardingRule.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataHcpDnsForwardingRule resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-hcp.dataHcpDnsForwardingRule.DataHcpDnsForwardingRule.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-hcp.dataHcpDnsForwardingRule.DataHcpDnsForwardingRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataHcpDnsForwardingRule to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-hcp.dataHcpDnsForwardingRule.DataHcpDnsForwardingRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataHcpDnsForwardingRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/hcp/0.110.0/docs/data-sources/dns_forwarding_rule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-hcp.dataHcpDnsForwardingRule.DataHcpDnsForwardingRule.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataHcpDnsForwardingRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpDnsForwardingRule.DataHcpDnsForwardingRule.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-hcp.dataHcpDnsForwardingRule.DataHcpDnsForwardingRule.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpDnsForwardingRule.DataHcpDnsForwardingRule.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpDnsForwardingRule.DataHcpDnsForwardingRule.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpDnsForwardingRule.DataHcpDnsForwardingRule.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpDnsForwardingRule.DataHcpDnsForwardingRule.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpDnsForwardingRule.DataHcpDnsForwardingRule.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpDnsForwardingRule.DataHcpDnsForwardingRule.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpDnsForwardingRule.DataHcpDnsForwardingRule.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpDnsForwardingRule.DataHcpDnsForwardingRule.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpDnsForwardingRule.DataHcpDnsForwardingRule.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpDnsForwardingRule.DataHcpDnsForwardingRule.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpDnsForwardingRule.DataHcpDnsForwardingRule.property.createdAt">created_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpDnsForwardingRule.DataHcpDnsForwardingRule.property.domainName">domain_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpDnsForwardingRule.DataHcpDnsForwardingRule.property.inboundEndpointIps">inbound_endpoint_ips</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpDnsForwardingRule.DataHcpDnsForwardingRule.property.ruleId">rule_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpDnsForwardingRule.DataHcpDnsForwardingRule.property.selfLink">self_link</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpDnsForwardingRule.DataHcpDnsForwardingRule.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpDnsForwardingRule.DataHcpDnsForwardingRule.property.dnsForwardingIdInput">dns_forwarding_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpDnsForwardingRule.DataHcpDnsForwardingRule.property.dnsForwardingRuleIdInput">dns_forwarding_rule_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpDnsForwardingRule.DataHcpDnsForwardingRule.property.hvnIdInput">hvn_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpDnsForwardingRule.DataHcpDnsForwardingRule.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpDnsForwardingRule.DataHcpDnsForwardingRule.property.projectIdInput">project_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpDnsForwardingRule.DataHcpDnsForwardingRule.property.dnsForwardingId">dns_forwarding_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpDnsForwardingRule.DataHcpDnsForwardingRule.property.dnsForwardingRuleId">dns_forwarding_rule_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpDnsForwardingRule.DataHcpDnsForwardingRule.property.hvnId">hvn_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpDnsForwardingRule.DataHcpDnsForwardingRule.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpDnsForwardingRule.DataHcpDnsForwardingRule.property.projectId">project_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-hcp.dataHcpDnsForwardingRule.DataHcpDnsForwardingRule.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-hcp.dataHcpDnsForwardingRule.DataHcpDnsForwardingRule.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-hcp.dataHcpDnsForwardingRule.DataHcpDnsForwardingRule.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-hcp.dataHcpDnsForwardingRule.DataHcpDnsForwardingRule.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-hcp.dataHcpDnsForwardingRule.DataHcpDnsForwardingRule.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-hcp.dataHcpDnsForwardingRule.DataHcpDnsForwardingRule.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-hcp.dataHcpDnsForwardingRule.DataHcpDnsForwardingRule.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-hcp.dataHcpDnsForwardingRule.DataHcpDnsForwardingRule.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-hcp.dataHcpDnsForwardingRule.DataHcpDnsForwardingRule.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-hcp.dataHcpDnsForwardingRule.DataHcpDnsForwardingRule.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-hcp.dataHcpDnsForwardingRule.DataHcpDnsForwardingRule.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-hcp.dataHcpDnsForwardingRule.DataHcpDnsForwardingRule.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@cdktf/provider-hcp.dataHcpDnsForwardingRule.DataHcpDnsForwardingRule.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

---

##### `domain_name`<sup>Required</sup> <a name="domain_name" id="@cdktf/provider-hcp.dataHcpDnsForwardingRule.DataHcpDnsForwardingRule.property.domainName"></a>

```python
domain_name: str
```

- *Type:* str

---

##### `inbound_endpoint_ips`<sup>Required</sup> <a name="inbound_endpoint_ips" id="@cdktf/provider-hcp.dataHcpDnsForwardingRule.DataHcpDnsForwardingRule.property.inboundEndpointIps"></a>

```python
inbound_endpoint_ips: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `rule_id`<sup>Required</sup> <a name="rule_id" id="@cdktf/provider-hcp.dataHcpDnsForwardingRule.DataHcpDnsForwardingRule.property.ruleId"></a>

```python
rule_id: str
```

- *Type:* str

---

##### `self_link`<sup>Required</sup> <a name="self_link" id="@cdktf/provider-hcp.dataHcpDnsForwardingRule.DataHcpDnsForwardingRule.property.selfLink"></a>

```python
self_link: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-hcp.dataHcpDnsForwardingRule.DataHcpDnsForwardingRule.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `dns_forwarding_id_input`<sup>Optional</sup> <a name="dns_forwarding_id_input" id="@cdktf/provider-hcp.dataHcpDnsForwardingRule.DataHcpDnsForwardingRule.property.dnsForwardingIdInput"></a>

```python
dns_forwarding_id_input: str
```

- *Type:* str

---

##### `dns_forwarding_rule_id_input`<sup>Optional</sup> <a name="dns_forwarding_rule_id_input" id="@cdktf/provider-hcp.dataHcpDnsForwardingRule.DataHcpDnsForwardingRule.property.dnsForwardingRuleIdInput"></a>

```python
dns_forwarding_rule_id_input: str
```

- *Type:* str

---

##### `hvn_id_input`<sup>Optional</sup> <a name="hvn_id_input" id="@cdktf/provider-hcp.dataHcpDnsForwardingRule.DataHcpDnsForwardingRule.property.hvnIdInput"></a>

```python
hvn_id_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-hcp.dataHcpDnsForwardingRule.DataHcpDnsForwardingRule.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `project_id_input`<sup>Optional</sup> <a name="project_id_input" id="@cdktf/provider-hcp.dataHcpDnsForwardingRule.DataHcpDnsForwardingRule.property.projectIdInput"></a>

```python
project_id_input: str
```

- *Type:* str

---

##### `dns_forwarding_id`<sup>Required</sup> <a name="dns_forwarding_id" id="@cdktf/provider-hcp.dataHcpDnsForwardingRule.DataHcpDnsForwardingRule.property.dnsForwardingId"></a>

```python
dns_forwarding_id: str
```

- *Type:* str

---

##### `dns_forwarding_rule_id`<sup>Required</sup> <a name="dns_forwarding_rule_id" id="@cdktf/provider-hcp.dataHcpDnsForwardingRule.DataHcpDnsForwardingRule.property.dnsForwardingRuleId"></a>

```python
dns_forwarding_rule_id: str
```

- *Type:* str

---

##### `hvn_id`<sup>Required</sup> <a name="hvn_id" id="@cdktf/provider-hcp.dataHcpDnsForwardingRule.DataHcpDnsForwardingRule.property.hvnId"></a>

```python
hvn_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-hcp.dataHcpDnsForwardingRule.DataHcpDnsForwardingRule.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `project_id`<sup>Required</sup> <a name="project_id" id="@cdktf/provider-hcp.dataHcpDnsForwardingRule.DataHcpDnsForwardingRule.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpDnsForwardingRule.DataHcpDnsForwardingRule.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-hcp.dataHcpDnsForwardingRule.DataHcpDnsForwardingRule.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataHcpDnsForwardingRuleConfig <a name="DataHcpDnsForwardingRuleConfig" id="@cdktf/provider-hcp.dataHcpDnsForwardingRule.DataHcpDnsForwardingRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-hcp.dataHcpDnsForwardingRule.DataHcpDnsForwardingRuleConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_hcp import data_hcp_dns_forwarding_rule

dataHcpDnsForwardingRule.DataHcpDnsForwardingRuleConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  dns_forwarding_id: str,
  dns_forwarding_rule_id: str,
  hvn_id: str,
  id: str = None,
  project_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpDnsForwardingRule.DataHcpDnsForwardingRuleConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpDnsForwardingRule.DataHcpDnsForwardingRuleConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpDnsForwardingRule.DataHcpDnsForwardingRuleConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpDnsForwardingRule.DataHcpDnsForwardingRuleConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpDnsForwardingRule.DataHcpDnsForwardingRuleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpDnsForwardingRule.DataHcpDnsForwardingRuleConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpDnsForwardingRule.DataHcpDnsForwardingRuleConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpDnsForwardingRule.DataHcpDnsForwardingRuleConfig.property.dnsForwardingId">dns_forwarding_id</a></code> | <code>str</code> | The ID of the DNS forwarding configuration this rule belongs to. |
| <code><a href="#@cdktf/provider-hcp.dataHcpDnsForwardingRule.DataHcpDnsForwardingRuleConfig.property.dnsForwardingRuleId">dns_forwarding_rule_id</a></code> | <code>str</code> | The ID of the DNS forwarding rule. |
| <code><a href="#@cdktf/provider-hcp.dataHcpDnsForwardingRule.DataHcpDnsForwardingRuleConfig.property.hvnId">hvn_id</a></code> | <code>str</code> | The ID of the HVN that this DNS forwarding rule belongs to. |
| <code><a href="#@cdktf/provider-hcp.dataHcpDnsForwardingRule.DataHcpDnsForwardingRuleConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.110.0/docs/data-sources/dns_forwarding_rule#id DataHcpDnsForwardingRule#id}. |
| <code><a href="#@cdktf/provider-hcp.dataHcpDnsForwardingRule.DataHcpDnsForwardingRuleConfig.property.projectId">project_id</a></code> | <code>str</code> | The ID of the HCP project where the DNS forwarding rule is located. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-hcp.dataHcpDnsForwardingRule.DataHcpDnsForwardingRuleConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-hcp.dataHcpDnsForwardingRule.DataHcpDnsForwardingRuleConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-hcp.dataHcpDnsForwardingRule.DataHcpDnsForwardingRuleConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-hcp.dataHcpDnsForwardingRule.DataHcpDnsForwardingRuleConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-hcp.dataHcpDnsForwardingRule.DataHcpDnsForwardingRuleConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-hcp.dataHcpDnsForwardingRule.DataHcpDnsForwardingRuleConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-hcp.dataHcpDnsForwardingRule.DataHcpDnsForwardingRuleConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `dns_forwarding_id`<sup>Required</sup> <a name="dns_forwarding_id" id="@cdktf/provider-hcp.dataHcpDnsForwardingRule.DataHcpDnsForwardingRuleConfig.property.dnsForwardingId"></a>

```python
dns_forwarding_id: str
```

- *Type:* str

The ID of the DNS forwarding configuration this rule belongs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.110.0/docs/data-sources/dns_forwarding_rule#dns_forwarding_id DataHcpDnsForwardingRule#dns_forwarding_id}

---

##### `dns_forwarding_rule_id`<sup>Required</sup> <a name="dns_forwarding_rule_id" id="@cdktf/provider-hcp.dataHcpDnsForwardingRule.DataHcpDnsForwardingRuleConfig.property.dnsForwardingRuleId"></a>

```python
dns_forwarding_rule_id: str
```

- *Type:* str

The ID of the DNS forwarding rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.110.0/docs/data-sources/dns_forwarding_rule#dns_forwarding_rule_id DataHcpDnsForwardingRule#dns_forwarding_rule_id}

---

##### `hvn_id`<sup>Required</sup> <a name="hvn_id" id="@cdktf/provider-hcp.dataHcpDnsForwardingRule.DataHcpDnsForwardingRuleConfig.property.hvnId"></a>

```python
hvn_id: str
```

- *Type:* str

The ID of the HVN that this DNS forwarding rule belongs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.110.0/docs/data-sources/dns_forwarding_rule#hvn_id DataHcpDnsForwardingRule#hvn_id}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-hcp.dataHcpDnsForwardingRule.DataHcpDnsForwardingRuleConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.110.0/docs/data-sources/dns_forwarding_rule#id DataHcpDnsForwardingRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project_id`<sup>Optional</sup> <a name="project_id" id="@cdktf/provider-hcp.dataHcpDnsForwardingRule.DataHcpDnsForwardingRuleConfig.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

The ID of the HCP project where the DNS forwarding rule is located.

If not specified, the project specified in the HCP Provider config block will be used, if configured.
If a project is not configured in the HCP Provider config block, the oldest project in the organization will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.110.0/docs/data-sources/dns_forwarding_rule#project_id DataHcpDnsForwardingRule#project_id}

---



